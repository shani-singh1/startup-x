'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Users, Shield, Target, Sparkles, Network, LineChart } from 'lucide-react'

const features = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Quantum-Level AI Matching",
    description: "Our proprietary AI analyzes 100+ data points to create perfect matches with 93% accuracy.",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Hyper-Relevant Connections",
    description: "Connect with professionals who align perfectly with your industry, goals, and expertise level.",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    icon: <Network className="h-8 w-8" />,
    title: "Smart Network Expansion",
    description: "AI-powered suggestions that grow your network in the most impactful direction.",
    gradient: "from-orange-600 to-yellow-500"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Growth Analytics",
    description: "Real-time insights into your networking effectiveness and relationship strength.",
    gradient: "from-green-600 to-emerald-500"
  }
]

const powerFeatures = [
  {
    title: "Revolutionary AI Engine",
    description: "Built on cutting-edge machine learning models trained on millions of successful professional connections.",
    stats: [
      { value: "500M+", label: "Data Points Analyzed" },
      { value: "93%", label: "Match Accuracy" },
      { value: "0.3s", label: "Processing Time" }
    ]
  },
  {
    title: "Instant Professional Graph",
    description: "See your entire professional universe and potential connections visualized in real-time.",
    stats: [
      { value: "10K+", label: "Industries Mapped" },
      { value: "5M+", label: "Career Paths" },
      { value: "∞", label: "Possibilities" }
    ]
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f610,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium inline-flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Not Just Networking —{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              A Revolution
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the future of professional networking with our groundbreaking AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Power Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {powerFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                {feature.description}
              </p>
              <div className="grid grid-cols-3 gap-4">
                {feature.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}