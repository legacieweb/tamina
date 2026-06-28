import React from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { products, collections } from '../data/products'
import InteractiveProductCard from '../components/InteractiveProductCard'
import Products from './Products'

const Collection = ({ title, description, category, tag }) => {
  const { collectionId } = useParams()
  const location = useLocation()
  
  const collection = collectionId ? collections.find(c => c.id === collectionId) : null
  const collectionProducts = collection ? products.filter(p => collection.productIds.includes(p.id)) : []
  const displayTitle = collection?.title || title || 'Collection'
  const displayDesc = collection?.description || description || 'Exclusive Collection'
  const displayTag = collection?.tag || 'Collection'

  if (collection) {
    return (
      <div className="collection-page bg-white">
        <section className="relative h-screen min-h-[400px] sm:h-[100dvh] sm:min-h-[500px] flex items-center justify-center overflow-hidden bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={collection.heroImage}
              alt={collection.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/50" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="text-accent text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 block">
                {displayTag}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black elegant-font tracking-tighter leading-tight text-white px-2">
                {displayTitle}
              </h1>
              {collection.subtitle && (
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl elegant-font italic font-normal text-accent/90">
                  {collection.subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {collectionProducts.map((product, idx) => (
                <InteractiveProductCard key={product.id} product={product} idx={idx} />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="collection-page">
      <div className="pt-20 sm:pt-40 pb-8 sm:pb-10 max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 text-center">
         <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-accent mb-4 sm:mb-6">{displayDesc}</p>
         <h1 className="text-4xl sm:text-6xl md:text-9xl font-black elegant-font tracking-tighter uppercase leading-tight">{displayTitle}</h1>
      </div>
      
      <div className="-mt-32">
        <Products forcedCategory={category} forcedTag={tag} />
      </div>
    </div>
  )
}

export default Collection