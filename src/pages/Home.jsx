import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { products as localProducts, heroSlides, collections } from '../data/products'
import { ArrowUpRight, Star, Leaf, Shield, Truck, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import InteractiveProductCard from '../components/InteractiveProductCard'
import TimerCountdown from '../components/TimerCountdown'

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const autoPlayRef = useRef(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, 6000)
    }
    return () => clearInterval(autoPlayRef.current)
  }, [autoPlay, nextSlide])

  const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text
    return text.split(' ').slice(0, -2).join(' ') + '...'
  }

  const current = heroSlides[currentSlide]

  return (
<section className="relative h-[100dvh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-accent text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-6 block">
            {current.tag.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black elegant-font tracking-tighter leading-none mb-4 sm:mb-6 md:mb-8 text-white px-2">
            <span className="block overflow-hidden relative">
              {current.title.split("").map((char, index) => (
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
                  className="inline-block relative"
                >
                  <span className="block">{char === " " ? "\u00A0" : char}</span>
                  <span className="absolute top-full left-0 block text-accent">{char === " " ? "\u00A0" : char}</span>
                </motion.span>
              ))}
            </span>
            {current.subtitle && (
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl elegant-font italic font-normal text-accent mt-2 leading-tight">
                {current.subtitle}
              </span>
            )}
          </h1>

          {current.discount && (
            <div className="inline-block bg-accent text-white px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                {current.discount}% OFF • Limited Time
              </span>
            </div>
          )}

          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 md:mb-12 max-w-xl sm:max-w-2xl mx-auto font-serif px-4 sm:px-0">
            {truncateText(current.description, 80)}
          </p>

          <Link
            to={current.link}
            className="inline-block bg-primary text-white hover:bg-accent transition-all border-2 border-white"
          >
            <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em] py-1.5 px-4 sm:py-2 sm:px-6">
              Shop Now
            </span>
            <span className="block border-t border-white/30 py-2 px-4 sm:py-3 sm:px-6">
              <ArrowUpRight size={14} className="sm:size-[18px] inline-block" />
            </span>
          </Link>
        </motion.div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-20"
      >
        <ChevronLeft size={20} className="sm:size-[24px] md:size-[28px] text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-20"
      >
        <ChevronRight size={20} className="sm:size-[24px] md:size-[28px] text-white" />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentSlide === idx ? 'bg-accent w-6 sm:w-8' : 'bg-white/30'
              }`}
            />
          ))}
      </div>
    </section>
  )
}

const Home = () => {
  const [products, setProducts] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    setProducts(localProducts.slice(0, 8))
  }, [])

  return (
    <div ref={containerRef} className="bg-white">
      <HeroCarousel />


      {/* Beauty Categories - Horizontal Scroll on Mobile */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
                Shop By Category
              </span>
              <h2 className="text-4xl md:text-6xl font-black elegant-font tracking-tighter mt-2">
                Beauty Categories
              </h2>
            </div>
          </motion.div>

          <div className="relative">
<div className="flex md:grid md:grid-cols-8 gap-6 overflow-x-auto pb-1 scrollbar-hide">
                {[
                  { name: 'Skincare', img: 'https://i.pinimg.com/originals/0e/f5/07/0ef507aef9a02683fc0b9fdf8163ecc2.jpg', path: '/products?category=Skincare', icon: Leaf },
                  { name: 'Makeup', img: 'https://www.tradeindia.com/wp-content/uploads/2024/09/9-Must-Have-Cosmetic-Products-for-Your-Beauty-Routine-jpg.webp', path: '/products?category=Makeup', icon: Heart },
                  { name: 'Haircare', img: 'https://www.thedailystruggle.co.uk/wp-content/uploads/2024/08/image00025.jpeg', path: '/products?category=Haircare', icon: Heart },
                  { name: 'Fragrance', img: 'https://www.dbcosmetics.com.au/cdn/shop/files/FragranceBundle-min.jpg?v=1741149357&w=800', path: '/products?category=Fragrance', icon: Heart },
                  { name: 'Nails', img: 'https://img4.dhresource.com/webp/m/0x0/f3/albu/km/j/11/ee59468a-42ee-497d-96bf-c54d320269cb.jpg', path: '/products?category=Nails', icon: Heart },
                  { name: 'Beauty Tools', img: 'https://i0.wp.com/www.bangonstyleblog.com/wp-content/uploads/2016/11/SPECTRUM-MAKEUP-BRUSHES-2.jpg?resize=1500%2C2000', path: '/products?category=Beauty%20Tools', icon: Heart },
                  { name: 'Wigs', img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350899418/ZU/KS/IW/11069546/wig-for-ladies-500x500.jpg', path: '/products?category=Wigs', icon: Heart },
                  { name: 'Supplements', img: 'https://cf.cjdropshipping.com/17501184/1934779392119279616.jpg?x-oss-process=image%2Fformat%2Cwebp', path: '/products?category=Supplements', icon: Leaf }
                ].map((cat, idx) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group relative overflow-hidden flex-shrink-0 w-48 md:w-auto"
                >
                  <Link to={cat.path} className="block">
                    <div className="aspect-[3/4] bg-gray-50 overflow-hidden">
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <h4 className="text-lg font-black elegant-font text-white uppercase tracking-tighter mb-2">
                          {cat.name}
                        </h4>
                        <div className="w-8 h-1 bg-accent mx-auto mb-2 group-hover:w-12 transition-all duration-500" />
                        <p className="text-white/80 text-[8px] font-bold uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                          Explore
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
                Curated Selection
              </span>
              <h2 className="text-4xl md:text-6xl font-black elegant-font tracking-tighter mt-2">
                Featured Collection
              </h2>
            </div>
            <motion.a
              href="/products"
              whileHover={{ x: 5 }}
              className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors flex items-center"
            >
              View All
              <ChevronRight size={14} className="ml-1" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product, idx) => (
              <InteractiveProductCard key={product.id} product={product} idx={idx} />
            ))}
          </div>
        </div>
      </section>

{/* Limited Time Offers - Deal Focus */}
        <section className="py-32 px-6 md:px-12 bg-gradient-to-r from-rose-50 via-white to-pink-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
                Limited Time Offers
              </span>
              <h2 className="text-4xl md:text-6xl font-black elegant-font tracking-tighter mb-12 text-primary">
                Summer Sale Collection
              </h2>
              
              <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-2 sm:px-8 sm:py-5 md:px-12 md:py-10 rounded-xl shadow-2xl mb-16 border border-rose-100">
                <TimerCountdown targetDate="2026-07-01" size="large" />
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              {localProducts.filter(p => p.tags?.includes('deal') || p.tags?.includes('limited') || p.tags?.includes('featured')).map((product, idx) => (
                <InteractiveProductCard key={product.id} product={product} idx={idx} showBadge={true} />
              ))}
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/limited-offers"
                  className="inline-flex items-center gap-3 bg-primary text-white hover:bg-accent transition-all border-2 border-primary hover:border-accent px-12 py-4"
                >
                  <ArrowUpRight size={20} />
                  <span className="text-sm font-bold uppercase tracking-[0.4em]">
                    View All Deals
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Supplements Collection - Product Grid */}
        <section className="py-32 px-6 md:px-12 bg-gradient-to-br from-green-50 via-white to-teal-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-20 w-64 h-64 bg-teal-100 rounded-full blur-2xl opacity-20 translate-y-1/4 -translate-x-1/4" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-16"
            >
              <div>
                <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">
                  Wellness Essentials
                </span>
                <h2 className="text-4xl md:text-6xl font-black elegant-font tracking-tighter mt-2">
                  Supplements Collection
                </h2>
              </div>
              <Link
                to="/products?category=Supplements"
                className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors flex items-center"
              >
                View All
                <ArrowUpRight size={14} className="ml-1" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {localProducts.filter(p => p.category === 'Supplements').map((product, idx) => (
                <InteractiveProductCard key={product.id} product={product} idx={idx} showBadge={true} />
              ))}
            </div>
          </div>
        </section>



      {/* Brand Values Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">
              Conscious Luxury
            </span>
            <h2 className="text-5xl md:text-7xl font-black elegant-font tracking-tighter mb-8">
              Beauty That Honors
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Beauty that honors both your skin and our planet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {[
              { icon: Leaf, title: 'Clean Formulas', desc: '100% ethically-sourced, cruelty-free botanicals.' },
              { icon: Shield, title: 'Dermatologist Tested', desc: 'Rigorously tested for safety on all skin types.' },
              { icon: Truck, title: 'Global Delivery', desc: 'Fast shipping to USA, Canada, and UK.' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="text-center group"
              >
                <motion.div
                  className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ backgroundColor: 'rgba(232, 180, 184, 0.2)' }}
                >
                  <item.icon size={32} className="text-accent group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-xl font-black uppercase tracking-wider mb-4 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Editorial Footer Quote */}
      <div className="py-40 bg-gradient-to-r from-rose-50 to-pink-50 text-center px-6">
        <p className="text-[10px] font-bold uppercase tracking-[1em] text-accent mb-12">The Beauty Philosophy</p>
        <h2 className="text-4xl md:text-6xl font-black elegant-font tracking-tighter max-w-4xl mx-auto leading-tight italic text-primary">
          "True beauty comes from embracing your authentic self."
        </h2>
      </div>
    </div>
  )
}

export default Home