'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of navbar + some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-white cursor-pointer"
            >
              Propab
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Features
              </a>
              <a 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                How It Works
              </a>
              <a 
                onClick={() => scrollToSection('upcoming')}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Upcoming
              </a>
              <Button 
                onClick={() => scrollToSection('home')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                onClick={() => scrollToSection('features')}
                className="block px-3 py-2 text-gray-300 hover:text-white cursor-pointer"
              >
                Features
              </a>
              <a
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 text-gray-300 hover:text-white cursor-pointer"
              >
                How It Works
              </a>
              <a
                onClick={() => scrollToSection('upcoming')}
                className="block px-3 py-2 text-gray-300 hover:text-white cursor-pointer"
              >
                Upcoming
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
} 