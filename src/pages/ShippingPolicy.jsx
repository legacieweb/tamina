import React from 'react'
import { motion } from 'framer-motion'

const ShippingPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-br from-rose-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-accent mb-4">Beauty Delivery</p>
          <h1 className="text-5xl md:text-7xl font-black elegant-font tracking-tighter uppercase">Shipping Policy</h1>
          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            International shipping available to USA, UK & Canada. Free shipping on orders over $150.
          </p>
        </motion.div>

        <div className="space-y-12 text-gray-600 leading-relaxed prose prose-lg max-w-none">
<section>
             <h2 className="text-2xl font-black elegant-font uppercase tracking-tight text-primary mb-6">Delivery Estimates</h2>
             <p>Each Tamina Beauty product is carefully packaged. We deliver to USA, Canada, and UK with estimated shipping times of 6-13 business days.</p>
           </section>

           <section>
             <h2 className="text-2xl font-black elegant-font uppercase tracking-tight text-primary mb-6">Shipping Rates</h2>
             <p>Our international delivery rates are as follows:</p>
             <ul className="list-disc pl-6 mt-4 space-y-2">
               <li><strong>USA:</strong> $15</li>
               <li><strong>Canada:</strong> $20</li>
               <li><strong>UK:</strong> $20</li>
             </ul>
             <p className="mt-4">Shipping fees are fixed and applied at checkout based on destination.</p>
           </section>

          <section>
            <h2 className="text-2xl font-black elegant-font uppercase tracking-tight text-primary mb-6">Order Tracking</h2>
            <p>Once your order has been shipped, you will receive a confirmation email with a tracking number, allowing you to monitor its progress until it reaches your doorstep.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black elegant-font uppercase tracking-tight text-primary mb-6">International Shipping</h2>
            <p>We ship worldwide. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black elegant-font uppercase tracking-tight text-primary mb-6">Beauty Support</h2>
            <p>If you have any questions or concerns about your delivery, please reach out to our beauty team at hello@Taminabeauty.com.</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ShippingPolicy
