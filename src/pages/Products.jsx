import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { products as localProducts } from '../data/products'
import { api } from '../utils/api'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Search, Loader2 } from 'lucide-react'

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const sortAlphabetical = (array) => {
  return [...array].sort((a, b) => a.name.localeCompare(b.name))
}

const truncateName = (name, maxLength = 30) => {
  if (name.length <= maxLength) return name
  return name.split(' ').slice(0, -1).join(' ') + '...'
}

const Products = ({ forcedCategory, forcedTag }) => {
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState(forcedCategory || 'All')
  const [tag, setTag] = useState(forcedTag || null)
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('random')
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  const productsPerPage = isMobile ? 14 : 15

  const categories = ['All', 'Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Nails', 'Beauty Tools']

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    setProducts(shuffleArray(localProducts))
    setLoading(false)
    
    const params = new URLSearchParams(location.search)
    const catParam = params.get('category')
    const searchParam = params.get('search')
    const tagParam = params.get('tag')
    
    if (!forcedCategory && catParam) setCategory(catParam)
    if (!forcedTag && tagParam) setTag(tagParam)
    if (searchParam) setSearchQuery(searchParam)
  }, [location, forcedCategory, forcedTag])

  useEffect(() => {
    let result = products
    if (category !== 'All') result = result.filter(p => p.category === category)
    if (tag) result = result.filter(p => p.tags?.includes(tag))
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    if (sortBy === 'alphabetical') {
      result = sortAlphabetical(result)
    }
    setFilteredProducts(result)
    setCurrentPage(1)
  }, [category, searchQuery, products, tag, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

return (
    <div className="pt-16 sm:pt-44 min-h-screen bg-white">
      {/* Mobile Header */}
      <div className="block sm:hidden">
        <div className="max-w-[1800px] mx-auto px-4 mb-8">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Collection Archives</p>
              <h1 className="text-3xl font-black elegant-font tracking-tighter leading-tight uppercase">
                {category === 'All' ? 'All Beauty' : category.split(' ')[0]}
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-left">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Curation</p>
                <p className="text-xl font-black elegant-font">{filteredProducts.length} PRODUCTS</p>
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="h-14 w-14 bg-primary text-white flex flex-col items-center justify-center space-y-1 hover:bg-accent transition-all"
              >
                <Plus size={16} className={`transition-transform duration-500 ${isFilterOpen ? 'rotate-45' : ''}`} />
                <span className="text-[7px] font-bold uppercase tracking-widest">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden sm:block">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6 block"
              >
                Collection Archives
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                key={category}
                className="text-7xl lg:text-[10vw] font-black elegant-font tracking-tighter leading-[0.8] uppercase"
              >
                {category === 'All' ? 'All' : category.split(' ')[0]} <br/>
                <span className="italic font-normal serif lowercase ml-[10vw]">{category === 'All' ? 'Beauty' : category.split(' ')[1] || 'Essentials'}</span>
              </motion.h1>
            </div>
            <div className="flex items-center space-x-12">
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Curation</p>
                <p className="text-3xl font-black elegant-font">{filteredProducts.length} PRODUCTS</p>
              </div>
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="h-24 w-24 bg-primary text-white flex flex-col items-center justify-center space-y-2 hover:bg-accent transition-all group"
              >
                <Plus size={20} className={`transition-transform duration-500 ${isFilterOpen ? 'rotate-45' : ''}`} />
                <span className="text-[8px] font-bold uppercase tracking-widest">Filter</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Overlay */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-gray-100 bg-gray-50/50"
          >
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-20">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Category</h3>
                <div className="flex flex-col space-y-4">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`text-2xl font-black elegant-font text-left hover:text-accent transition-colors ${category === cat ? 'text-primary' : 'text-gray-300'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
<div>
                 <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Sort By</h3>
                 <div className="flex flex-col space-y-4 text-2xl font-black elegant-font text-gray-300">
                   <button 
                     onClick={() => setSortBy('random')}
                     className={`text-left hover:text-accent transition-colors ${sortBy === 'random' ? 'text-primary' : ''}`}
                   >
                     Random Shuffle
                   </button>
                   <button 
                     onClick={() => setSortBy('alphabetical')}
                     className={`text-left hover:text-accent transition-colors ${sortBy === 'alphabetical' ? 'text-primary' : ''}`}
                   >
                     Alphabetical (A-Z)
                   </button>
                   <button className="text-left hover:text-accent transition-colors">Price: High - Low</button>
                   <button className="text-left hover:text-accent transition-colors">Price: Low - High</button>
                 </div>
               </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8">Refine</h3>
                <div className="relative">
                  <Search size={20} className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input 
                    type="text" 
                    placeholder="Keywords..." 
                    className="w-full bg-transparent border-b border-gray-200 py-4 pl-10 text-xl font-black elegant-font focus:outline-none focus:border-accent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

{/* Product Grid - Lookbook Style */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 py-12 sm:py-24">
        {loading ? (
          <div className="py-32 flex flex-col items-center justify-center space-y-6">
            <Loader2 size={40} className="animate-spin text-accent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400">Loading Archives...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-12 gap-y-12 md:gap-y-24">
            {paginatedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-50 group-hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={product.images[0]} 
                      alt={product.name} 
                      className="w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                    />
                    <div className="absolute top-0 left-0 p-4 md:p-6 overflow-hidden">
                      <motion.p 
                        className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.4em] text-primary/40 group-hover:text-accent transition-colors duration-500"
                      >
                        {product.category}
                      </motion.p>
                    </div>
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xs md:text-xl font-black elegant-font tracking-tight uppercase leading-tight group-hover:text-accent transition-colors duration-500">
                        {truncateName(product.name)}
                      </h3>
                    </div>

                    {product.originalPrice ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-accent font-bold text-sm md:text-base">
                          US$ {product.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 line-through text-[10px] md:text-xs">
                          US$ {product.originalPrice.toLocaleString()}
                        </span>
                        <span className="text-[8px] md:text-[9px] font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                          -{product.discount}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest">
                        US$ {product.price.toLocaleString()}
                      </span>
                    )}
                    <div className="flex-grow h-[1px] bg-gray-100 group-hover:bg-accent/30 transition-colors duration-700" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <h2 className="text-4xl font-black elegant-font text-gray-200 uppercase mb-8">No beauty products found</h2>
            <button onClick={() => {setCategory('All'); setSearchQuery('')}} className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-accent pb-2">Reset Collection</button>
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-x-2 mt-16 pb-20 px-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-accent text-accent font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <div className="flex flex-wrap justify-center gap-1 max-w-full overflow-x-auto py-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-[10px] sm:text-xs uppercase transition-all ${
                  currentPage === i + 1
                    ? 'bg-accent text-white'
                    : 'border border-gray-200 text-primary hover:bg-accent hover:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-accent text-accent font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

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

export default Products