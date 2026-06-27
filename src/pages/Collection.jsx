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
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-pink-50">
          <img
            src={collection.heroImage}
            alt={collection.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/40 to-transparent" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">
              {displayTag}
            </span>
            <h1 className="text-6xl md:text-8xl font-black elegant-font tracking-tighter text-white mb-4">
              {displayTitle}
            </h1>
            {collection.subtitle && (
              <p className="text-2xl md:text-3xl elegant-font italic text-accent">
                {collection.subtitle}
              </p>
            )}
          </div>
        </section>

        <section className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <div className="pt-40 pb-10 max-w-[1800px] mx-auto px-6 md:px-12 text-center">
         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-6">{displayDesc}</p>
         <h1 className="text-6xl md:text-9xl font-black elegant-font tracking-tighter uppercase leading-none">{displayTitle}</h1>
      </div>
      
      <div className="-mt-32">
        <Products forcedCategory={category} forcedTag={tag} />
      </div>
    </div>
  )
}

export default Collection