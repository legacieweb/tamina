import React from 'react'
import { motion } from 'framer-motion'

const AboutUs = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4">Our Story</p>
          <h1 className="text-5xl md:text-7xl font-black elegant-font tracking-tighter uppercase">About Tamina BEAUTY</h1>
        </motion.div>

        <div className="space-y-12 text-gray-600 leading-relaxed text-lg">
          <p>
            Founded in the heart of Nairobi, Tamina Beauty is a premium beauty destination blending natural Kenyan botanicals with modern skincare science. Our name reflects our legacy—empowering women to embrace their authentic beauty.
          </p>
          <p>
            We believe true beauty comes from within. Our collections are meticulously formulated using locally-sourced botanical ingredients, ensuring each product meets the highest standards of quality, safety, and efficacy. From daily essentials to luxury treatments, we provide every woman with beauty rituals that enhance her natural glow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm">
              <img src="https://images.unsplash.com/photo-1576869172991-1f6218f6e368?w=800&auto=format&fit=crop&q=80" alt="Beauty Craftsmanship" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-black elegant-font mb-6 uppercase tracking-tight text-primary">Natural Formulations</h3>
              <p className="text-base">
                Each elixir combines the wisdom of traditional Kenyan botanicals with modern clean beauty practices. We source ethically and formulate without harmful chemicals.
              </p>
            </div>
          </div>
          <p>
            Our mission is to redefine African beauty on the global stage, celebrating our natural heritage while delivering premium, clean beauty solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
