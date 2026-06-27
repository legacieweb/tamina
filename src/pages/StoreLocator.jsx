import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const StoreLocator = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4">Beauty Sanctuary</p>
          <h1 className="text-5xl md:text-7xl font-black elegant-font tracking-tighter uppercase">Store Locator</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Showroom Card */}
          <div className="bg-white p-12 md:p-20 flex flex-col justify-center rounded-sm shadow-sm border border-gray-100">
            <h2 className="text-4xl font-black elegant-font mb-10 tracking-tight uppercase text-primary">Nairobi Beauty Studio</h2>
            <div className="space-y-12">
              <div className="flex items-start space-x-6 text-lg text-gray-600">
                <MapPin size={24} className="text-accent mt-1 flex-shrink-0" />
                <span>Nairobi Beauty District, Westlands, <br />Nairobi, Kenya</span>
              </div>
              <div className="flex items-start space-x-6 text-lg text-gray-600">
                <Phone size={24} className="text-accent mt-1 flex-shrink-0" />
                <span>+254 113 20 3900</span>
              </div>
              <div className="flex items-start space-x-6 text-lg text-gray-600">
                <Clock size={24} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                  <p>Sat: 11:00 AM - 5:00 PM</p>
                  <p>Sun: By Appointment Only</p>
                </div>
              </div>
              <button className="bg-primary text-white py-6 px-12 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-colors w-full md:w-auto">Get Directions</button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-sm group">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Beauty Store" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
            />
<div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center p-12 text-center text-white backdrop-blur-[2px]">
               <MapPin size={48} className="text-accent mb-6" />
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4">International Shipping</p>
               <h3 className="text-4xl font-black elegant-font uppercase tracking-tighter mb-4">USA, UK & Canada</h3>
               <p className="text-sm max-w-xs">Currently shipping worldwide with focus on USA, UK, and Canadian markets. Free shipping on orders over $150.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreLocator
