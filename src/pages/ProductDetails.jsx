import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, Truck, ShieldCheck, Heart, Plus, Share2, Info, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart, toggleWishlist, isInWishlist } = useCart()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('details')
  const [addedToCart, setAddedToCart] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleColorSelect = (color) => {
    setSelectedColor(color)
    const variantWithImage = product.variants.find(v => v.color === color && v.size === selectedSize)
    if (variantWithImage?.imageIndex !== undefined) {
      setSelectedImage(variantWithImage.imageIndex)
    }
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size)
    const variantWithImage = product.variants.find(v => v.size === size && (v.color === selectedColor || !selectedColor))
    if (variantWithImage?.imageIndex !== undefined) {
      setSelectedImage(variantWithImage.imageIndex)
    }
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id))
    if (foundProduct) {
      setProduct(foundProduct)
      if (foundProduct.variants.length > 0) {
        setSelectedSize(foundProduct.variants[0].size)
        if (foundProduct.variants[0].color) {
          setSelectedColor(foundProduct.variants[0].color)
        } else {
          setSelectedColor('')
        }
        if (foundProduct.variants[0].imageIndex !== undefined) {
          setSelectedImage(foundProduct.variants[0].imageIndex)
        }
      }
    }
  }, [id])

  if (!product) return null

  const currentVariant = product.variants.find(v => v.size === selectedSize && v.color === selectedColor) || product.variants.find(v => v.size === selectedSize)
  const inStock = currentVariant ? currentVariant.stock > 0 : false
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)

  const shippingLocations = product.shipping ? Object.keys(product.shipping) : []
  const hasSingleLocation = shippingLocations.length === 1

  const handleAddToCart = () => {
    if (inStock && currentVariant) {
      addToCart(product, currentVariant, quantity);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  const handleBuyNow = () => {
    if (inStock && currentVariant) {
      addToCart(product, currentVariant, quantity);
      navigate('/checkout');
    }
  };

  return (
    <div className="bg-white pt-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Image Carousel */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-primary/20 backdrop-blur-md flex items-center justify-center rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-primary/20 backdrop-blur-md flex items-center justify-center rounded-full text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-white"
              >
                <ChevronRight size={24} />
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${((selectedImage + 1) / product.images.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-accent scale-95' : 'border-transparent opacity-50 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info (Sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4 block">Beauty Collection</span>
                    <h1 className="text-5xl font-black elegant-font tracking-tighter leading-[0.9] uppercase">{product.name}</h1>
                  </div>
                  <div className="relative">
                    <button 
                      onClick={() => {
                        const productUrl = window.location.origin + `#/product/${product.id}`
                        navigator.clipboard.writeText(productUrl)
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2000)
                      }}
                      className="h-12 w-12 border border-gray-100 flex items-center justify-center rounded-full hover:bg-gray-50 transition-all"
                    >
                      <Share2 size={18} strokeWidth={1.5} />
                    </button>
                    <AnimatePresence>
                      {copied && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.8 }}
                          className="absolute top-full right-0 mt-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full whitespace-nowrap"
                        >
                          Copied!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
                <div className="flex items-end space-x-4 mb-8">
                  <p className="text-3xl font-black elegant-font">US$ {currentVariant?.price?.toLocaleString() || product.price.toLocaleString()}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 pb-1">VAT Included</p>
                </div>

                {/* Shipping Info */}
                {shippingLocations.length > 0 && (
                  <div className="p-6 bg-primary/5 border-l-2 border-primary mb-10">
                    <div className="flex items-center space-x-2 mb-3">
                      <Truck size={16} className="text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Shipping Information</span>
                    </div>
                    {hasSingleLocation ? (
                      <p className="text-sm font-serif">
                        <span className="text-[10px] font-bold uppercase text-accent">{shippingLocations[0]}:</span> {product.shipping[shippingLocations[0]]}
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {shippingLocations.map(loc => (
                          <p key={loc} className="text-sm font-serif">
                            <span className="text-[10px] font-bold uppercase text-accent">{loc}:</span> {product.shipping[loc]}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Selection Logic */}
              <div className="space-y-10">
                {/* Colors */}
                {product.variants.some(v => v.color) && (
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Palette Selection</h3>
                  <div className="flex flex-wrap gap-3">
                    {[...new Set(product.variants.map(v => v.color))].filter(Boolean).map(color => (
                      <button 
                        key={color}
                        onClick={() => handleColorSelect(color)}
                        className={`px-8 py-4 text-[10px] font-bold uppercase tracking-widest transition-all ${selectedColor === color ? 'bg-primary text-white scale-105 shadow-xl' : 'border border-gray-100 hover:border-primary'}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                )}

                {/* Sizes */}
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">Size Selection</h3>
                  <div className="flex flex-wrap gap-4">
                    {[...new Set(product.variants.map(v => v.size))].map(size => (
                      <button 
                        key={size}
                        onClick={() => handleSizeSelect(size)}
                        className={`h-14 w-14 flex items-center justify-center text-xs font-bold transition-all ${selectedSize === size ? 'bg-primary text-white scale-110 shadow-lg' : 'border border-gray-100 hover:border-primary'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-4 pt-6">
                  <AnimatePresence>
                    {addedToCart && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 text-green-700 p-4 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center space-x-2"
                      >
                        <Check size={14} />
                        <span>Added to your beauty ritual</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button 
                    onClick={handleBuyNow}
                    className={`w-full h-20 text-[10px] font-bold uppercase tracking-[0.4em] transition-all flex items-center justify-center ${inStock ? 'bg-accent text-white hover:bg-primary' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                    disabled={!inStock}
                  >
                    {inStock ? 'Buy Now' : 'Archive (Out of Stock)'}
                  </button>

                  <div className="flex space-x-4">
                    <button 
                      onClick={handleAddToCart}
                      className={`flex-grow h-20 text-[10px] font-bold uppercase tracking-[0.4em] transition-all flex items-center justify-center ${inStock ? 'bg-primary text-white hover:bg-accent' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                      disabled={!inStock}
                    >
                      {inStock ? 'Add to Ritual' : 'Currently Unavailable'}
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product)}
                      className="h-20 w-20 border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all group"
                    >
                      <Heart 
                        size={24} 
                        className={`transition-colors ${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-300 group-hover:text-red-500'}`} 
                        strokeWidth={isInWishlist(product.id) ? 0 : 1.5}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Refined Accordions */}
              <div className="pt-12 border-t border-gray-100 space-y-6">
                {[
                  { id: 'details', label: 'Product Details', content: product.description },
                  { id: 'care', label: 'Ingredients & Care', content: 'Natural botanical ingredients. For external use only. Store in a cool, dry place away from direct sunlight.' },
                  { id: 'shipping', label: 'Delivery & Returns', content: '14-day return policy for unopened products.' }
                ].map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-6">
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === item.id ? '' : item.id)}
                      className="w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]"
                    >
                      <span>{item.label}</span>
                      <Plus size={14} className={`transition-transform duration-500 ${activeAccordion === item.id ? 'rotate-45' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === item.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-6 text-sm text-gray-500 leading-relaxed font-serif italic">{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Brand Trust */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center space-x-4 p-6 bg-gray-50">
                  <ShieldCheck size={20} className="text-accent" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Certified <br /> Authentic</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gray-50">
                  <Info size={20} className="text-accent" />
                  <span className="text-[8px] font-bold uppercase tracking-widest">Ethically <br /> Sourced</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lookbook Expansion (Related) */}
        <div className="mt-64">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-black elegant-font tracking-tighter uppercase">More from the Archive</h2>
            <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="text-[10px] font-bold uppercase tracking-widest border-b border-primary pb-2">Products</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
{relatedProducts.map(p => (
               <Link key={p.id} to={`/product/${p.id}`} className="group">
                 <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-6 relative">
                   <img src={p.images[0]} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-105" />
                 </div>
                 <h3 className="text-xl font-black elegant-font uppercase group-hover:text-accent transition-colors">{p.name}</h3>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-2">US$ {p.price.toLocaleString()}</p>
               </Link>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails