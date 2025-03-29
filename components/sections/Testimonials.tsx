'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, TrendingUp, Users, Building } from 'lucide-react'

const testimonials = [
  {
    quote: "Propab's matching accuracy is mind-blowing. I found my co-founder within days of joining.",
    author: "Sarah Chen",
    title: "Founder & CEO",
    company: "TechVentures AI",
    image: "/testimonials/avatar1.avif",
    stats: {
      connections: "50+",
      deals: "$2.5M"
    }
  },
  {
    quote: "This is the future of professional networking. The AI matches are incredibly precise and relevant.",
    author: "Michael Rodriguez",
    title: "VP of Innovation",
    company: "Global Ventures",
    image: "/testimonials/avatar2.avif",
    stats: {
      connections: "120+",
      deals: "$5M"
    }
  },
  {
    quote: "Game-changing platform. Every connection has led to meaningful business opportunities.",
    author: "Emily Watson",
    title: "Tech Lead",
    company: "Silicon Dynamics",
    image: "/testimonials/avatar3.avif",
    stats: {
      connections: "75+",
      deals: "$1.8M"
    }
  }
]

const stats = [
  { value: "98%", label: "Success Rate", icon: Star },
  { value: "150K+", label: "Active Users", icon: Users },
  { value: "500+", label: "Companies", icon: Building },
  { value: "$50M+", label: "Deals Generated", icon: TrendingUp }
]

export default function Testimonials() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_100%,#3b82f615,transparent)]" />

      <motion.div style={{ y }} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium inline-flex items-center mb-4">
            <Star className="w-4 h-4 mr-2" />
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join thousands of professionals who have transformed their networking experience
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <stat.icon className="w-6 h-6 text-purple-400 mb-4" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
                <Quote className="w-10 h-10 text-purple-500/20 absolute top-6 right-6" />
                
                <div className="flex items-center mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-purple-500/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                    <p className="text-sm text-purple-400">{testimonial.company}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700/50">
                  <div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      {testimonial.stats.connections}
                    </div>
                    <div className="text-sm text-gray-500">
                      Relevant Connections
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      {testimonial.stats.deals}
                    </div>
                    <div className="text-sm text-gray-500">
                      Value Generated
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-400">
              <span className="text-white font-semibold">67,435</span> professionals joined in the last 24 hours
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 