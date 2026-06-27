import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Instagram } from 'lucide-react'

const Contact = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4">Beauty Consultation</p>
          <h1 className="text-5xl md:text-7xl font-black elegant-font tracking-tighter uppercase">Contact Us</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Beauty Inquiries</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-6 text-lg text-gray-600">
                  <Mail size={20} className="text-primary" />
                  <span>hello@Taminabeauty.com</span>
                </div>
                <div className="flex items-center space-x-6 text-lg text-gray-600">
                  <Phone size={20} className="text-primary" />
                  <span>+254 700 000 000</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Beauty Sanctuary</h2>
              <div className="flex items-start space-x-6 text-lg text-gray-600">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Nairobi Beauty District, <br />Westlands, Nairobi, Kenya</span>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">International Shipping</h2>
              <p className="text-gray-600">
                We ship to USA, UK & Canada. For wholesale inquiries, please select "Wholesale" in the form below.
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Follow Our Glow</h2>
              <div className="flex space-x-8">
                <a href="https://www.instagram.com/beauty.tamira/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} className="text-gray-400 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-accent/10">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Beauty Concern</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-accent transition-colors appearance-none">
                  <option>Skincare Advice</option>
                  <option>Product Inquiry</option>
                  <option>Order Support</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-6 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
