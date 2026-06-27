import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Check, Truck } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { api } from '../utils/api'
import { PaystackButton } from 'react-paystack'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { AnimatePresence } from 'framer-motion'
import { products } from '../data/products'

const Preloader = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
  >
    <div className="w-24 h-[1px] bg-gray-100 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-primary"
        animate={{ 
          x: ['-100%', '100%'],
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
    </div>
    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.4em] text-primary animate-pulse">
      Securing Your Pieces
    </p>
  </motion.div>
)

const SuccessPopup = ({ order, onClose }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
  >
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className="bg-white max-w-lg w-full p-12 text-center space-y-8"
    >
      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
        <Check className="text-white" size={40} />
      </div>
      
      <div className="space-y-4">
        <h2 className="text-3xl font-black elegant-font uppercase tracking-tighter">Order Secured</h2>
        <p className="text-sm font-serif italic text-gray-500">
          Your pieces have been archived. A digital receipt has been downloaded to your device.
        </p>
      </div>

      <div className="py-8 border-y border-gray-100 space-y-4">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span>Order Number</span>
          <span className="text-primary">{order?.order_number}</span>
        </div>
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span>Amount Paid</span>
          <span className="text-primary">${order?.total?.toLocaleString()}</span>
        </div>
      </div>

      {!localStorage.getItem('shabil_user') && (
        <div className="bg-gray-50 p-6 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Guest Order</p>
          <p className="text-[9px] text-gray-500 leading-relaxed">
            Create an account later using your Order Number to track this shipment.
          </p>
        </div>
      )}

      <button 
        onClick={onClose}
        className="w-full h-16 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all"
      >
        Continue
      </button>
    </motion.div>
  </motion.div>
)

const Checkout = () => {
  const { cart, clearCart } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [orderInfo, setOrderInfo] = useState(null)
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    address: '',
    city: '',
    state: '',
    phone: '',
    postalCode: ''
  })

  // Get unique shipping locations from cart items
  const availableLocations = useMemo(() => {
    const locationsMap = {}
    cart.forEach(item => {
      const product = products.find(p => p.id === item.id)
      if (product?.shipping) {
        Object.entries(product.shipping).forEach(([location, period]) => {
          if (!locationsMap[location]) {
            locationsMap[location] = period
          }
        })
      }
    })
    return Object.entries(locationsMap).map(([location, period]) => ({ location, period }))
  }, [cart])

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const orderTotal = subtotal

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
    setFormData(prev => ({ ...prev, city: location }))
  }

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = () => resolve(img);
      img.onerror = (e) => reject(e);
      img.src = url;
    });
  };

  const generatePDF = async (order) => {
    const doc = new jsPDF()
    
    try {
      const logoUrl = 'https://i.imgur.com/QPJRRvJ.png'
      const logo = await loadImage(logoUrl)
      doc.addImage(logo, 'PNG', 85, 10, 40, 20)
    } catch (error) {
      console.error('Failed to load logo:', error)
      doc.setFontSize(22)
      doc.text('Shabil KENYA', 105, 20, { align: 'center' })
      doc.setFontSize(10)
      doc.text('Luxury Fashion Archive', 105, 26, { align: 'center' })
    }
    
    doc.setFontSize(12)
    doc.text(`Order Number: ${order.order_number}`, 20, 45)
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 52)
    doc.text(`Customer: ${order.customer_name}`, 20, 59)
    doc.text(`Address: ${order.shipping_details?.address || 'N/A'}`, 20, 66)
    doc.text(`Reference: ${order.payment_reference}`, 20, 73)

    const tableData = order.items.map(item => [
      item.name,
      `${item.selectedSize} / ${item.selectedColor}`,
      item.quantity,
      `$${item.price.toLocaleString()}`,
      `$${(item.price * item.quantity).toLocaleString()}`
    ])
    
    doc.autoTable({
      startY: 82,
      head: [['Product', 'Variant', 'Qty', 'Price', 'Subtotal']],
      body: tableData,
      theme: 'grid',
      headStyles: { fillStyle: '#000000' }
    })
    
    const finalY = doc.lastAutoTable.finalY || 75
    doc.setFontSize(14)
    doc.text(`Order Total: $${order.total.toLocaleString()}`, 140, finalY + 15)
    
    doc.save(`COUTUREE-ORDER-${order.order_number}.pdf`)
  }

  const handlePlaceOrder = async (reference) => {
    setPaymentProcessing(true)
    await new Promise(resolve => setTimeout(resolve, 2000))

    try {
      const orderData = {
        user_id: user?.id || null,
        customer_name: formData.name,
        payment_reference: reference,
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          variantId: item.variantId,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor
        })),
        total: orderTotal,
        amount_paid: orderTotal,
        balance_due: 0,
        payment_option: 'full',
        delivery_method: 'delivery',
        shipping_details: formData,
        status: 'Processing'
      }

      const response = await api.createOrder(orderData)
      setOrderInfo(response)
      await generatePDF(response)
      clearCart()
      setPaymentProcessing(false)

      if (user) {
        setShowSuccess(true)
      } else {
        navigate('/thank-you', { state: { order: response } })
      }
    } catch (error) {
      console.error('Failed to place order:', error)
      alert('Order recording failed. Please contact support with your payment reference: ' + reference)
      setPaymentProcessing(false)
    }
  }

  const componentProps = {
    email: formData.email,
    amount: orderTotal * 100,
    currency: 'USD',
    metadata: {
      name: formData.name,
      phone: formData.phone,
    },
    publicKey,
    text: "Complete Purchase",
    onSuccess: (reference) => handlePlaceOrder(reference.reference),
    onClose: () => alert("Transaction was not completed, window closed."),
  }

  if (cart.length === 0) {
    navigate('/cart')
    return null
  }

  const isFormValid = formData.name && formData.email && formData.address && formData.city && formData.state && formData.phone;

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <AnimatePresence>
        {paymentProcessing && <Preloader />}
        {showSuccess && (
          <SuccessPopup 
            order={orderInfo} 
            onClose={() => {
              setShowSuccess(false)
              navigate('/thank-you', { state: { order: orderInfo } })
            }} 
          />
        )}
      </AnimatePresence>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Forms */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h1 className="text-4xl font-black elegant-font tracking-tighter uppercase mb-12">Checkout</h1>
              
              <form onSubmit={(e) => e.preventDefault()} className="space-y-16">
                {/* Contact Information */}
                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                      />
                    </div>
                  </div>
                </section>

                {/* Delivery Locations */}
                {availableLocations.length > 0 && (
                  <section>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Delivery Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {availableLocations.map(({ location, period }) => (
                        <button
                          key={location}
                          type="button"
                          onClick={() => handleLocationSelect(location)}
                          className={`p-6 border-2 flex flex-col items-start space-y-2 transition-all ${selectedLocation === location ? 'border-primary bg-primary/5' : 'border-gray-100'}`}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-widest">{location}</span>
                          <span className="text-[8px] text-gray-400 uppercase tracking-widest">{period}</span>
                        </button>
                      ))}
                    </div>
                  </section>
                )}

                {/* Shipping Details */}
                <section>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Shipping Destination</h3>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Delivery Address</label>
                      <input 
                        required 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Apartment, suite, etc." 
                        className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">State / Province</label>
                        <input 
                          required 
                          type="text" 
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          placeholder="State, Province" 
                          className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">City</label>
                        <input 
                          required 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City" 
                          className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone (M-PESA)</label>
                        <input 
                          required 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="07XX XXX XXX" 
                          className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Postal Code</label>
                      <input 
                        type="text" 
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full border-b border-gray-100 py-3 text-sm focus:outline-none focus:border-accent font-serif" 
                      />
                    </div>
                  </div>
                </section>

                {/* Payment Summary */}
                {isFormValid ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-accent/5 border border-accent/10">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">Order Total</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Total Amount</span>
                        <span className="text-xl font-black">US$ {orderTotal.toLocaleString()}</span>
                      </div>
                    </div>
                    <PaystackButton 
                      {...componentProps}
                      className="w-full h-20 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-accent transition-all flex items-center justify-center space-x-4"
                    />
                  </div>
                ) : (
                  <button 
                    disabled
                    className="w-full h-20 bg-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em] cursor-not-allowed flex items-center justify-center"
                  >
                    Please fill all required fields
                  </button>
                )}
              </form>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-40 bg-gray-50 p-10 md:p-16 space-y-12">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Order Archive</h3>
              
              <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.variantId}`} className="flex space-x-6">
                    <div className="h-24 w-20 bg-white flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-contain grayscale" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{item.name}</h4>
                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">Size {item.selectedSize} / {item.selectedColor} x {item.quantity}</p>
                      <p className="text-sm font-bold mt-2">US$ {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12 border-t border-gray-200 space-y-4">
                <div className="flex justify-between text-xs font-serif italic text-gray-500">
                  <span>Total</span>
                  <span>US$ {orderTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-12 space-y-6">
                <div className="flex items-center space-x-4 text-gray-400">
                  <ShieldCheck size={18} />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Encrypted Checkout</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <Lock size={18} />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Secure Data Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout