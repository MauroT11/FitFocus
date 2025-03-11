'use client'

import { motion } from 'framer-motion'

export default function page() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About FitFocus</h1>
          <p className="text-xl text-gray-600">Your Personal Fitness Journey Companion</p>
        </motion.div>

        <div className="grid gap-8">
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              FitFocus is dedicated to making your fitness journey accessible, enjoyable, and successful. 
              We believe that everyone deserves access to high-quality fitness guidance and tools to achieve 
              their health and wellness goals.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Personalized workout plans tailored to your goals</li>
              <li>Progress tracking and analytics</li>
              <li>Expert-designed exercise libraries</li>
              <li>Community support and motivation</li>
              <li>Nutritional guidance and meal planning</li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-gray-700">
              What sets FitFocus apart is our commitment to providing a comprehensive fitness 
              solution that adapts to your needs. Whether you&lsquo;re just starting your fitness 
              journey or you&lsquo;re an experienced athlete, our platform provides the tools and 
              support you need to succeed.
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  )
}
