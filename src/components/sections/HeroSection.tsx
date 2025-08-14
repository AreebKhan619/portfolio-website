'use client'

import { motion } from 'framer-motion'
import { Download, ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const scrollToNextSection = () => {
    const element = document.querySelector('#experience')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container-padding w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Areeb Khan
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
              Full Stack Developer & Software Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
              I craft digital experiences with modern web technologies, specializing in React, TypeScript, and Node.js. 
              Passionate about building scalable solutions and mentoring fellow developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="/Areeb Khan - Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
            
            <button
              onClick={scrollToNextSection}
              className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
            >
              View My Work
              <ArrowDown className="ml-2" size={20} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              onClick={scrollToNextSection}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 animate-bounce"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={24} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}