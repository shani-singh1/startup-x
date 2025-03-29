'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, UserPlus, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI Profile Analysis",
    description: "Our quantum AI analyzes your professional DNA across 100+ dimensions in milliseconds",
    gradient: "from-blue-600 to-cyan-500",
    stats: ["0.3s", "Analysis Time"],
    detail: "Using advanced machine learning to understand your unique professional fingerprint"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Instant Matching",
    description: "Get matched with professionals who perfectly align with your goals and expertise",
    gradient: "from-purple-600 to-pink-500",
    stats: ["93%", "Match Accuracy"],
    detail: "Proprietary algorithms ensure connections that matter"
  },
  {
    icon: <UserPlus className="h-8 w-8" />,
    title: "Smart Connection",
    description: "Connect and grow your network with AI-powered relationship insights",
    gradient: "from-orange-600 to-yellow-500",
    stats: ["2.5x", "Faster Growth"],
    detail: "Build meaningful relationships that accelerate your career"
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_50%,#3b82f615,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium inline-flex items-center mb-4">
            Simple Yet Powerful
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three Steps to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Revolutionary Networking
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the future of professional connections through our groundbreaking AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} p-4 mb-6`}>
                  {step.icon}
                </div>
                
                <div className="absolute -top-4 right-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Step {index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6">
                  {step.description}
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {step.stats[0]}
                  </div>
                  <div className="text-sm text-gray-500">
                    {step.stats[1]}
                  </div>
                </div>

                <p className="text-sm text-gray-500">
                  {step.detail}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-500/30" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="px-4 py-2">
              <span className="text-gray-400">Ready to transform your network?</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 