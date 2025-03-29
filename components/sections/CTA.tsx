'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { ArrowRight, Timer, Shield, Star, Users, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: Star,
    title: "Lifetime Founder Status",
    description: "Early members get exclusive perks & features forever"
  },
  {
    icon: Shield,
    title: "Price Lock Guarantee",
    description: "Your rate will never increase - ever"
  },
  {
    icon: Users,
    title: "Priority Matching",
    description: "Get matched with industry leaders first"
  },
  {
    icon: Sparkles,
    title: "Early Access",
    description: "Be among the first to experience the future"
  }
]

export default function CTA() {
  const [email, setEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState({
    days: 21,
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your email collection logic here
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_100%,#3b82f620,transparent)]" />

      <motion.div style={{ y }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Countdown Timer */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Timer className="w-4 h-4 mr-1" />
              <div className="flex items-center space-x-3">
                <div>
                  <span className="font-bold">{timeLeft.days}</span>d
                </div>
                <div>
                  <span className="font-bold">{timeLeft.hours}</span>h
                </div>
                <div>
                  <span className="font-bold">{timeLeft.minutes}</span>m
                </div>
                <div>
                  <span className="font-bold">{timeLeft.seconds}</span>s
                </div>
              </div>
              <span className="ml-2">until launch</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Don't Miss Your Chance to{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Transform Your Network
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join over 67,435 professionals who have already secured their spot. 
              Lock in founder-exclusive benefits before they're gone forever.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-lg"
              />
              <Button 
                type="submit" 
                size="lg"
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-medium"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400 mb-16">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                100% Secure
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                Founder Benefits
              </span>
              <span>•</span>
              <span>Cancel Anytime</span>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
              >
                <benefit.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
} 