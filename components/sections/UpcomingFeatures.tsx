'use client'

import { motion, useInView, useAnimationControls } from 'framer-motion'
import { Brain, Heart, Globe, Sparkles, Zap, Lock, Clock, Crown, Star, Network, Shield, Lightbulb, Nodes, Waves, Orbit } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef, useEffect } from 'react'

const featureShowcases = [
  {
    id: "digital-twin",
    title: "Digital Twin of You",
    subtitle: "Your AI-Powered Digital Consciousness",
    icon: Brain,
    gradient: "from-blue-600 to-cyan-500",
    label: "Coming Q1 2025",
    image: "/features/digital-twin.webp",
    highlights: [
      {
        icon: Network,
        title: "Memory Aggregation",
        description: "Your digital twin learns from every interaction, building a comprehensive understanding of your personality, preferences, and patterns.",
        details: [
          "Real-time learning from conversations",
          "Pattern recognition across experiences",
          "Contextual memory synthesis",
          "Emotional intelligence mapping"
        ]
      },
      {
        icon: Brain,
        title: "Cognitive Evolution",
        description: "Watch your digital twin evolve and grow smarter over time, developing deeper insights and understanding.",
        details: [
          "Progressive learning system",
          "Adaptive behavior modeling",
          "Personal growth tracking",
          "Dynamic personality development"
        ]
      },
      {
        icon: Shield,
        title: "Privacy-First Architecture",
        description: "Your data remains completely private and secure, with you in full control.",
        details: [
          "End-to-end encryption",
          "Local processing options",
          "Granular privacy controls",
          "Data sovereignty"
        ]
      }
    ],
    stats: [
      { value: "100TB+", label: "Memory Capacity" },
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "0.1ms", label: "Response Time" }
    ],
    demo: {
      title: "See It In Action",
      description: "Watch how your digital twin learns and evolves",
      videoUrl: "/videos/digital-twin-demo.mp4"
    }
  },
  {
    id: "multiverse",
    title: "Multiverse of What If",
    subtitle: "Explore Infinite Possibilities",
    icon: Globe,
    gradient: "from-purple-600 to-pink-500",
    label: "Early Access Q2 2025",
    image: "/features/multiverse.webp",
    highlights: [
      {
        icon: Lightbulb,
        title: "Scenario Generation",
        description: "Explore different life paths and decisions through advanced simulations.",
        details: [
          "AI-powered scenario modeling",
          "Decision impact analysis",
          "Probability calculations",
          "Timeline visualizations"
        ]
      },
      // ... similar structure for other highlights
    ],
    stats: [
      { value: "1000+", label: "Scenarios/User" },
      { value: "85%", label: "Decision Accuracy" },
      { value: "∞", label: "Possibilities" }
    ]
  },
  {
    id: "relationship-bridge",
    title: "Connection Catalyst",
    subtitle: "Advanced Human Understanding & Harmony",
    icon: Heart,
    gradient: "from-pink-600 to-red-500",
    label: "Limited Beta Q1 2025",
    image: "/features/relationships.webp",
    highlights: [
      {
        icon: Zap,
        title: "Real-Time Social Intelligence",
        description: "Revolutionary AI that reads social dynamics and provides real-time conversational enhancement.",
        details: [
          "Dynamic conversation flow",
          "Emotional resonance mapping",
          "Social harmony optimization",
          "Connection strength metrics"
        ]
      },
      {
        icon: Shield,
        title: "Harmony Navigator",
        description: "Breakthrough technology that transforms challenging interactions into opportunities for growth.",
        details: [
          "Neural-guided resolutions",
          "Behavioral intelligence",
          "Growth pathways",
          "Success trajectory mapping"
        ]
      },
      {
        icon: Brain,
        title: "Connection Intelligence",
        description: "Revolutionary insights into human dynamics and connection potential.",
        details: [
          "Connection strength index",
          "Growth catalyst detection",
          "Communication enhancement",
          "Future potential mapping"
        ]
      }
    ],
    stats: [
      { value: "89%", label: "Resolution Rate" },
      { value: "0.3s", label: "Processing Speed" },
      { value: "∞", label: "Growth Potential" }
    ]
  },
  {
    id: "legacy-impact",
    title: "Legacy & Memory",
    subtitle: "Your Digital Legacy",
    icon: Star,
    gradient: "from-green-600 to-emerald-500",
    label: "Coming Q3 2025",
    image: "/features/legacy.webp",
    highlights: [
      {
        icon: Globe,
        title: "Universal Translation",
        description: "Your digital presence communicates effectively across cultures and generations.",
        details: [
          "Cross-cultural adaptation",
          "Generational translation",
          "Context preservation",
          "Value transmission"
        ]
      },
      {
        icon: Clock,
        title: "Immersive Memory Capsules",
        description: "Create rich, interactive memories that can be experienced by future generations.",
        details: [
          "3D memory capture",
          "Emotional preservation",
          "Interactive storytelling",
          "Multi-sensory experiences"
        ]
      },
      {
        icon: Sparkles,
        title: "Post-Life Impact",
        description: "Ensure your wisdom and values continue to influence and guide future generations.",
        details: [
          "Value preservation",
          "Knowledge transfer",
          "Interactive guidance",
          "Legacy protection"
        ]
      }
    ],
    stats: [
      { value: "100+", label: "Years Preserved" },
      { value: "8D", label: "Memory Quality" },
      { value: "∞", label: "Impact Duration" }
    ]
  }
]

function FeatureVisual({ feature, isInView }: { feature: any, isInView: boolean }) {
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const visualComponents = {
    "digital-twin": (
      <div className="relative w-full h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl overflow-hidden">
        {/* Central Brain Visualization */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              scale: 1,
              opacity: 1,
              transition: { duration: 1 }
            }
          }}
        >
          <div className="relative">
            <motion.div
              className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.2)",
                  "0 0 40px rgba(59, 130, 246, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.2)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain className="w-16 h-16 text-blue-400" />
            </motion.div>
            
            {/* Synaptic Connections */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-40 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 45}deg)`,
                  transformOrigin: "0 0"
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scaleX: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Memory Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.5)`
            }}
            animate={{
              x: [Math.random() * 400, Math.random() * 400],
              y: [Math.random() * 400, Math.random() * 400],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    ),

    "multiverse": (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl overflow-hidden">
        {/* Universe Portals */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${25 + i * 25}%`,
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <motion.div
              className={`w-32 h-32 rounded-full bg-gradient-to-r 
                ${i === 0 ? "from-purple-500/20 to-blue-500/20" :
                  i === 1 ? "from-pink-500/20 to-purple-500/20" :
                  "from-blue-500/20 to-green-500/20"}`}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.2)",
                  "0 0 40px rgba(168, 85, 247, 0.4)",
                  "0 0 20px rgba(168, 85, 247, 0.2)",
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30"
                animate={{ rotate: [0, -360] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(3)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${150 + i * 100} 200 Q ${200 + i * 100} ${150 + Math.random() * 100} ${250 + i * 100} 200`}
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  `M ${150 + i * 100} 200 Q ${200 + i * 100} ${150 + Math.random() * 100} ${250 + i * 100} 200`,
                  `M ${150 + i * 100} 200 Q ${200 + i * 100} ${250 + Math.random() * 100} ${250 + i * 100} 200`,
                  `M ${150 + i * 100} 200 Q ${200 + i * 100} ${150 + Math.random() * 100} ${250 + i * 100} 200`,
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>
    ),

    "relationship-bridge": (
      <div className="relative w-full h-full bg-gradient-to-br from-pink-900/20 to-red-900/20 rounded-2xl overflow-hidden">
        {/* Central Connection */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 1 }
            }
          }}
        >
          <motion.div
            className="relative w-64 h-32"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Connection Bridge */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-pink-500/0"
                style={{
                  transform: `rotateY(${i * 36}deg) translateX(-50%) translateY(-50%)`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Floating Hearts with Trails */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            animate={{
              x: [Math.random() * 400, Math.random() * 400],
              y: [Math.random() * 400, Math.random() * 400],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Heart className="w-4 h-4 text-pink-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    ),

    "legacy-impact": (
      <div className="relative w-full h-full bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl overflow-hidden">
        {/* Time Spiral */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              transition: { duration: 1 }
            }
          }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full"
              animate={{
                rotate: 360,
                scale: [1 - i * 0.1, 1 - i * 0.1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.div
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-emerald-400"
                style={{
                  filter: "blur(1px)",
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            </motion.div>
          ))}

          {/* Central Legacy Symbol */}
          <motion.div
            className="relative w-24 h-24 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(16, 185, 129, 0.2)",
                "0 0 40px rgba(16, 185, 129, 0.4)",
                "0 0 20px rgba(16, 185, 129, 0.2)",
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <Star className="w-12 h-12 text-emerald-400" />
          </motion.div>
        </motion.div>

        {/* Memory Fragments */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-6 bg-gradient-to-b from-emerald-500/0 via-emerald-500/30 to-emerald-500/0"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 400],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    )
  }

  return visualComponents[feature.id] || null
}

const FeatureHighlight = ({ highlight, delay }: { highlight: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative"
  >
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        <highlight.icon className="w-6 h-6 text-blue-400 relative z-10" />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300">
          {highlight.title}
        </h4>
        <p className="text-gray-400 mb-3 relative">
          {highlight.description}
          <motion.div
            className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ scale: [0.95, 1], opacity: [0, 1] }}
          />
        </p>
        <ul className="grid grid-cols-2 gap-2">
          {highlight.details.map((detail: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
              {detail}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
)

export default function UpcomingFeatures() {
  const [activeFeature, setActiveFeature] = useState(featureShowcases[0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  
  const headerRef = useRef(null)
  const navigationRef = useRef(null)
  const featureRefs = featureShowcases.map(() => useRef(null))
  const ctaRef = useRef(null)

  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })
  const isNavigationInView = useInView(navigationRef, { once: true, margin: "-100px" })
  const featureInView = featureRefs.map(ref => useInView(ref, { once: true, margin: "-100px" }))
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const handleSecureSpot = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="upcoming" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3b82f620,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-base font-medium inline-flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              Exclusive Preview
            </span>
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-base font-medium inline-flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Coming Soon
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            The Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Human Potential
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl mb-6">
            Be among the first to experience these revolutionary features that will transform how we connect, grow, and understand ourselves
          </p>
          <p className="text-yellow-500 text-lg font-semibold">
            Limited early access spots available
          </p>
        </motion.div>

        <motion.div
          ref={navigationRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isNavigationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide justify-center"
        >
          {featureShowcases.map((feature) => (
            <button
              key={feature.id}
              onClick={() => {
                setActiveFeature(feature)
                const element = document.getElementById(feature.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }}
              className={`flex items-center px-8 py-4 rounded-full transition-all text-lg ${
                activeFeature.id === feature.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white'
              }`}
            >
              <feature.icon className="w-6 h-6 mr-3" />
              {feature.title}
            </button>
          ))}
        </motion.div>

        <div className="space-y-32">
          {featureShowcases.map((feature, index) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              ref={featureRefs[index]}
              initial={{ opacity: 0, y: 50 }}
              animate={featureInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={featureInView[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                >
                  <FeatureVisual feature={feature} isInView={featureInView[index]} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={featureInView[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className={`px-3 py-1 rounded-full bg-${feature.gradient} text-white text-sm font-medium`}>
                    {feature.label}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-8">
                    {feature.subtitle}
                  </p>

                  <div className="space-y-6">
                    {feature.highlights.map((highlight, hIndex) => (
                      <FeatureHighlight
                        key={hIndex}
                        highlight={highlight}
                        delay={0.6 + (hIndex * 0.1)}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                    {feature.stats.map((stat, sIndex) => (
                      <motion.div
                        key={sIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={featureInView[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.8 + (sIndex * 0.1) }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
            <Star className="w-8 h-8 text-yellow-500 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">Founder's Early Access</h4>
            <p className="text-gray-400 mb-6 max-w-md">
              Join our exclusive founder's circle and be among the first to experience these revolutionary features
            </p>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm">
                Only 47 spots remaining
              </div>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600"
                onClick={handleSecureSpot}
              >
                Secure Your Spot
                <Lock className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 