'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Zap, Shield, Star, Clock, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: "Early Access",
    price: "Free",
    description: "Limited time offer for early adopters",
    features: [
      "5 AI-powered matches per month",
      "Basic profile analytics",
      "Email support",
      "Community access"
    ],
    perks: [
      "Early adopter badge",
      "Priority waitlist status"
    ],
    cta: "Join Waitlist",
    gradient: "from-gray-600 to-gray-500"
  },
  {
    name: "Founder's Club",
    price: "$99",
    originalPrice: "$299",
    description: "Exclusive launch pricing - Limited spots",
    features: [
      "Unlimited AI matches",
      "Advanced analytics dashboard",
      "Priority support 24/7",
      "Exclusive industry events",
      "Custom networking goals",
      "AI relationship insights",
      "Advanced filters & search"
    ],
    perks: [
      "Lifetime Founder status",
      "Future price lock guarantee",
      "Early access to new features"
    ],
    popular: true,
    cta: "Secure Your Spot",
    gradient: "from-blue-600 to-purple-600",
    spots: 47
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations and teams",
    features: [
      "Team collaboration features",
      "Dedicated account manager",
      "Custom integration options",
      "Advanced analytics suite",
      "Team training sessions",
      "API access",
      "Custom branding options"
    ],
    perks: [
      "Enterprise SLA",
      "Custom success metrics",
      "Quarterly business reviews"
    ],
    cta: "Contact Sales",
    gradient: "from-purple-600 to-pink-600"
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100%,#3b82f615,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium inline-flex items-center mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Limited Time Launch Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Invest in Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Professional Growth
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Join the future of professional networking with our special launch offers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-blue-500/50 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium inline-flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    {plan.price !== "Custom" && <span className="text-gray-400 ml-2">/month</span>}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                  {plan.spots && (
                    <div className="mt-2 text-sm text-yellow-500">
                      Only {plan.spots} spots remaining
                    </div>
                  )}
                </div>

                <Button 
                  className={`w-full mb-6 bg-gradient-to-r ${plan.gradient} hover:brightness-110`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-2">Features</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-400 mb-2">Special Perks</div>
                    <ul className="space-y-3">
                      {plan.perks.map((perk, i) => (
                        <li key={i} className="flex items-center text-purple-400">
                          <Zap className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Security Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-gray-400">
              Enterprise-grade security & compliance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 