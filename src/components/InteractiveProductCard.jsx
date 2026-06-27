import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, Share2 } from 'lucide-react'

const InteractiveProductCard = ({ product, idx, showBadge = false }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [copied, setCopied] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setRotate({ x: y * 20, y: x * 20 })
  }

  const truncateName = (name, maxLength = 30) => {
    if (name.length <= maxLength) return name
    return name.split(' ').slice(0, -1).join(' ') + '...'
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: idx * 0.1 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setRotate({ x: 0, y: 0 })
      }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <motion.div
          style={{ 
            perspective: 1000,
            transformStyle: "preserve-3d"
          }}
          animate={{ 
            rotateX: isHovered ? rotate.x : 0, 
            rotateY: isHovered ? rotate.y : 0,
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden bg-white aspect-[3/4] mb-6"
        >
          <motion.img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-contain"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div 
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: (showBadge || isHovered) ? 1 : 0, scale: (showBadge || isHovered) ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-accent text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
              {product.tags?.includes('deal') ? 'Deal' : product.tags?.includes('limited') ? 'Limited' : 'New'}
            </span>
          </motion.div>
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
              />
            )}
          </AnimatePresence>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                const productUrl = window.location.origin + `/product/${product.id}`
                navigator.clipboard.writeText(productUrl)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="h-10 w-10 bg-white/90 backdrop-blur-sm border border-gray-200 flex items-center justify-center rounded-full hover:bg-white transition-all shadow-sm"
            >
              <Share2 size={16} strokeWidth={1.5} />
            </button>
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.8 }}
                  className="absolute bottom-full right-0 mb-2 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded-full whitespace-nowrap"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        <div>
          <motion.h3 
            className="text-lg font-black uppercase tracking-wider mb-2 transition-colors duration-300"
            animate={{ color: isHovered ? '#e8b4b8' : '#1a1a1a' }}
          >
            {truncateName(product.name)}
          </motion.h3>
          {product.originalPrice && (
            <div className="flex items-center space-x-3">
              <span className="text-accent font-bold text-lg">
                US$ {product.price.toLocaleString()}
              </span>
              <span className="text-gray-400 line-through text-sm">
                US$ {product.originalPrice.toLocaleString()}
              </span>
            </div>
          )}
          {!product.originalPrice && (
            <span className="text-accent font-bold text-lg">
              US$ {product.price.toLocaleString()}
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export default InteractiveProductCard