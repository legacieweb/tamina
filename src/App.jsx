import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { ShoppingBag, Search, User, X, Instagram, ArrowRight, Heart } from 'lucide-react'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ThankYou from './pages/ThankYou'
import Wishlist from './pages/Wishlist'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import StoreLocator from './pages/StoreLocator'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import ShippingPolicy from './pages/ShippingPolicy'
import RefundsPolicy from './pages/RefundsPolicy'
import Collection from './pages/Collection'
import ScrollToTop from './components/ScrollToTop'
import Breadcrumb from './components/Breadcrumb'
import { motion, AnimatePresence } from 'framer-motion'
import { CartProvider, useCart } from './context/CartContext'
import { AuthProvider, useAuth } from './context/AuthContext'

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth()
  if (loading) return null
  if (!user) return <Navigate to="/auth" />
  if (role && user.role !== role) return <Navigate to="/" />
  return children
}

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const { cart, wishlist } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  const wishlistCount = wishlist.length

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsSearchOpen(false)
  }, [location])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`)
      setIsSearchOpen(false)
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            
            {/* Left: Brand Name (Logo) */}
            <div>
              <Link to="/" className="flex items-center group relative overflow-hidden py-1 px-2 sm:py-2 sm:px-4">
                <div className="flex overflow-hidden relative">
                  {"TAMINA".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      whileHover={{ y: "-100%" }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.03, 
                        ease: "easeOut" 
                      }}
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black elegant-font tracking-tighter leading-none relative block text-pink-500"
                    >
                      <span className="block">{char === " " ? "\u00A0" : char}</span>
                      <span className="absolute top-full left-0 block text-primary">{char === " " ? "\u00A0" : char}</span>
                    </motion.span>
                  ))}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[2px] bg-pink-500 origin-left"
                  />
                </div>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-4 md:space-x-10">
              <button onClick={() => setIsSearchOpen(true)} className="text-pink-500 hover:text-pink-600 transition-colors">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link to={user ? (user.role === 'admin' ? '/admin/dashboard' : '/dashboard') : '/auth'} className="text-pink-500 hover:text-pink-600 transition-colors">
                <User size={18} strokeWidth={1.5} />
              </Link>
              <Link to="/wishlist" className="relative p-2 text-pink-500 hover:text-pink-600 transition-colors">
                <Heart size={18} strokeWidth={1.5} className={wishlistCount > 0 ? "text-pink-500 fill-pink-500" : ""} />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>
              </Link>
              <Link to="/cart" className="relative p-2 text-pink-500 hover:text-pink-600 transition-colors">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute top-0 right-0 bg-pink-500 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartItemCount}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-white flex items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 sm:top-12 right-8 sm:right-12 hover:rotate-90 transition-transform"
            >
              <X size={32} className="sm:size-[40px]" strokeWidth={1} />
            </button>
            <form onSubmit={handleSearch} className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl">
              <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-accent mb-4 sm:mb-8 text-center">What are you looking for?</p>
              <input 
                type="text" 
                placeholder="Search our collections..." 
                className="w-full bg-transparent border-b border-gray-200 py-4 sm:py-6 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black elegant-font text-center focus:outline-none focus:border-primary transition-colors"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="mt-6 sm:mt-12 flex justify-center space-x-2 sm:space-x-4">
                {['Skincare', 'Makeup', 'Fragrance', 'Nails', 'Beauty Tools'].map(tag => (
                  <button 
                    key={tag}
                    type="button"
                    onClick={() => {setSearchQuery(tag); navigate(`/products?search=${tag}`)}}
                    className="text-[10px] font-bold uppercase tracking-widest border border-gray-100 px-6 py-2 hover:bg-primary hover:text-white transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white text-primary pt-32 pb-12 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <Link to="#/" className="block">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-4"
              >
              
                <h3 className="text-3xl font-black elegant-font">
                  TAMINA <span className="text-accent">Beauty</span>
                </h3>
              </motion.div>
            </Link>
            
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Clean, conscious beauty crafted in Kenya. Ethically sourced botanicals meet luxurious formulations for your radiant transformation.
            </p>

            <div className="flex space-x-8">
              {[
                { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/beauty.tamira/' }, 
                { 
                  icon: (props) => (
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      {...props}
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ), 
                  label: 'TikTok', 
                  url: 'https://www.tiktok.com/@tamina.beauty' 
                }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="group flex flex-col items-center space-y-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all"
                >
                  <social.icon size={20} className="group-hover:text-accent transition-colors" />
                  <span className="opacity-70 group-hover:opacity-100">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-6">Collections</h4>
              <ul className="space-y-4">
                {[
{ name: 'All Products', path: '#/products' },
                   { name: 'Skincare', path: '#/products?category=Skincare' },
                   { name: 'Makeup', path: '#/products?category=Makeup' },
                   { name: 'Haircare', path: '#/products?category=Haircare' },
                   { name: 'Fragrance', path: '#/products?category=Fragrance' },
                   { name: 'Nails', path: '#/products?category=Nails' },
                   { name: 'Beauty Tools', path: '#/products?category=Beauty Tools' }
                ].map(link => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link to={link.path} className="text-sm font-bold text-gray-600 uppercase tracking-[0.2em] hover:text-accent transition-all inline-block">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-6">The House</h4>
              <ul className="space-y-4">
                {[
                  { name: 'Our Story', path: '#/about' },
                  { name: 'Contact', path: '#/contact' },
                  { name: 'Store Locator', path: '#/store-locator' }
                ].map(link => (
                  <motion.li key={link.name} whileHover={{ x: 5 }}>
                    <Link to={link.path} className="text-sm font-bold text-gray-600 uppercase tracking-[0.2em] hover:text-accent transition-all inline-block">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-accent mb-6">Newsletter</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest leading-loose mb-6">
                Join for exclusive launches and beauty rituals.
              </p>
              <form className="relative">
                <input 
                  type="email" 
                  placeholder="email@domain.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 py-4 text-xs font-bold tracking-[0.3em] focus:outline-none focus:border-accent transition-all placeholder:text-gray-400"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ x: 5 }}
                  className="absolute right-0 bottom-4 text-accent hover:text-primary transition-all"
                >
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-12 border-t border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 text-center md:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">
              © 2026 Legacie Beauty • ALL RIGHTS RESERVED
            </p>

            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                { name: 'Privacy', path: '#/privacy-policy' },
                { name: 'Terms', path: '#/terms-of-service' },
                { name: 'Shipping', path: '#/shipping-policy' },
                { name: 'Refunds', path: '#/refunds-policy' }
              ].map(item => (
                <Link key={item.name} to={item.path} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-primary transition-all">
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center md:justify-end items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Crafted by</span>
              <a 
                href="https://iyonicorp.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-black uppercase tracking-[0.5em] text-accent hover:text-primary transition-all"
              >
                iyonicorp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function App() {
  const location = useLocation()
  const isDashboardPath = location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/admin')
  const isAdminPath = location.pathname.startsWith('/admin')

  return (
    <AuthProvider>
      <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
{!isDashboardPath && <Navbar />}
           {!isDashboardPath && <Breadcrumb />}
           <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
<Route path="/new-arrivals" element={<Collection title="New Arrivals" description="Fresh Beauty Drops" category="All" />} />
                <Route path="/best-sellers" element={<Collection title="Best Sellers" description="Most Loved Beauty" category="All" />} />
                <Route path="/gift-sets" element={<Collection title="Gift Sets" description="Curated Beauty Gifts" category="All" />} />
                <Route path="/deals" element={<Collection title="Special Deals" description="Limited Time Offers" category="All" />} />
                <Route path="/limited-offers" element={<Collection title="Limited Offers" description="Exclusive Collections" category="All" />} />
                <Route path="/collections/:collectionId" element={<Collection />} />
               
               <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/store-locator" element={<StoreLocator />} />
              
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/shipping-policy" element={<ShippingPolicy />} />
              <Route path="/refunds-policy" element={<RefundsPolicy />} />

              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={
                <ProtectedRoute role="user">
                  <Dashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/dashboard" element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
          {!isDashboardPath && <Footer />}
        </div>
      </CartProvider>
  </AuthProvider>
)
}

export default App
