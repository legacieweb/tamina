import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Truck, Sparkles } from 'lucide-react'

const CountrySelector = ({ onCountrySelect }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedCountry = localStorage.getItem('selectedCountry')
    if (!savedCountry) {
      setIsOpen(true)
    }
  }, [])

  const handleCountrySelect = (country) => {
    localStorage.setItem('selectedCountry', country)
    onCountrySelect(country)
    setIsOpen(false)
  }

  const countries = [
    { name: 'United States', code: 'USA', flag: '🇺🇸' },
    { name: 'Canada', code: 'Canada', flag: '🇨🇦' },
    { name: 'United Kingdom', code: 'UK', flag: '🇬🇧' },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-sm w-full relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-rose-200/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200/20 to-accent/20 rounded-full translate-y-1/2 -translate-x-1/4" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-primary transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="relative px-6 pt-10 pb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring' }}
                className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
              >
                <img
                  src="/logo.png"
                  alt="Tamina Beauty"
                  className="w-12 h-12 object-contain"
                />
              </motion.div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-black elegant-font text-primary mb-2">
                  Welcome to TAMINA
                </h2>
                <p className="text-gray-500 text-sm font-serif">
                  Choose your region for exclusive products
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {countries.map((country, idx) => (
                  <motion.button
                    key={country.code}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCountrySelect(country.code)}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white border-2 border-gray-100 rounded-2xl hover:border-accent hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{country.flag}</span>
                      <span className="font-bold text-primary text-base">{country.name}</span>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Sparkles size={18} className="text-accent" />
                    </motion.div>
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-accent to-rose-300 text-white py-3 rounded-full"
              >
                <Truck size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Free Shipping on All Orders
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CountrySelector