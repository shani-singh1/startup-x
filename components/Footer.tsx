'use client'

import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail, MapPin, Phone, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Enterprise', href: '#enterprise' },
    { name: 'Customer Stories', href: '#stories' }
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Contact', href: '#contact' }
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'Events', href: '#events' },
    { name: 'Help Center', href: '#help' },
    { name: 'API Docs', href: '#api' }
  ],
  legal: [
    { name: 'Privacy', href: '#privacy' },
    { name: 'Terms', href: '#terms' },
    { name: 'Security', href: '#security' }
  ]
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-purple-400' }
]

const metrics = [
  { value: '67,435+', label: 'Waitlist Members' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '150+', label: 'Countries' }
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter signup logic
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Propab</h2>
                <p className="text-gray-400 mb-6">
                  Revolutionizing professional networking through AI-powered connections.
                  Join the future of meaningful relationships.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="text-lg font-bold text-white">{metric.value}</div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Newsletter */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="text-sm font-semibold text-gray-300">
                    Subscribe to our newsletter
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-gray-800"
                    />
                    <Button type="submit" variant="secondary">
                      Subscribe
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Product
                </h3>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Propab. All rights reserved.
              </span>
              <span className="flex items-center text-sm text-gray-400">
                <Shield className="w-4 h-4 mr-1" />
                SOC2 Compliant
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 