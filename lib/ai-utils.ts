// Our site's content for the AI to reference
const siteContent = {
  features: [
    {
      title: "Digital Twin of You",
      description: "Your AI-powered digital consciousness that understands and evolves with you.",
      details: [
        "Memory Aggregation - Comprehensive understanding of your personality",
        "Cognitive Evolution - Grows smarter over time",
        "Privacy-First Architecture - Complete data control"
      ]
    },
    {
      title: "Multiverse of What If",
      description: "Explore infinite possibilities and potential futures.",
      details: [
        "Scenario Generation - AI-powered future modeling",
        "Decision Impact Analysis - Understanding consequences",
        "Timeline Visualization - See potential paths"
      ]
    },
    {
      title: "Connection Catalyst",
      description: "Advanced Human Understanding & Harmony",
      details: [
        "Real-Time Social Intelligence",
        "Harmony Navigator",
        "Connection Intelligence"
      ]
    },
    {
      title: "Legacy & Memory",
      description: "Your Digital Legacy that transcends time.",
      details: [
        "Universal Translation across generations",
        "Immersive Memory Capsules",
        "Post-Life Impact"
      ]
    }
  ]
}

function findRelevantContent(query: string): string {
  query = query.toLowerCase()
  
  // Define common responses
  const responses = {
    default: "I'd be happy to tell you about Propab's revolutionary features. What specific aspect interests you most?",
    
    greeting: "Hello! 👋 I'm here to help you understand Propab's revolutionary AI features. Would you like to learn about our Digital Twin, Multiverse Exploration, Connection Catalyst, or Legacy features?",
    
    digital_twin: "The Digital Twin feature creates an AI-powered version of you that learns and evolves. It includes memory aggregation, cognitive evolution, and maintains complete privacy control. Your digital twin becomes smarter and more attuned to your personality over time.",
    
    digital_twin_detail: "Your Digital Twin works by continuously learning from your interactions, decisions, and preferences. It uses advanced AI to understand your communication style, decision-making patterns, and personal values. This creates a secure, private digital consciousness that truly represents you.",
    
    multiverse: "Our Multiverse feature lets you explore different possibilities and potential futures using AI-powered scenario modeling and decision impact analysis. It's like having a personal 'what-if' simulator for life's important decisions.",
    
    multiverse_detail: "The Multiverse analyzes countless variables to create accurate predictions and scenarios. It helps you understand the potential outcomes of different choices, career paths, or life decisions before making them.",
    
    connection: "The Connection Catalyst feature enhances human understanding using real-time social intelligence and our advanced Harmony Navigator. It helps you build deeper, more meaningful relationships with others.",
    
    connection_detail: "Using advanced emotional intelligence algorithms, Connection Catalyst helps you understand subtle social dynamics, improve communication, and build stronger relationships. It provides real-time insights during interactions.",
    
    legacy: "The Legacy & Memory feature preserves your wisdom and impact across generations through universal translation and immersive memory capsules. It ensures your knowledge and values continue to influence future generations.",
    
    legacy_detail: "Legacy & Memory creates interactive, multi-dimensional records of your experiences, wisdom, and values. Future generations can engage with these in meaningful ways, bridging the gap between generations.",
    
    privacy: "Privacy is at our core. We use end-to-end encryption and give you complete control over your data. Your information never leaves your personal secure environment without your explicit permission.",
    
    security: "Security is paramount at Propab. We use military-grade encryption, zero-knowledge architecture, and give you complete control over your data sharing preferences.",
    
    how_it_works: "Propab uses advanced AI to create your digital twin, which then powers various features like scenario exploration and connection enhancement. The system learns and evolves with you while maintaining strict privacy standards.",
    
    technical: "Our platform uses cutting-edge AI technologies including neural networks, natural language processing, and emotional intelligence algorithms. All processing is done in secure, isolated environments.",
    
    pricing: "We're currently in early access phase. Join our waitlist to be among the first to experience these revolutionary features! Early adopters will receive special founding member benefits.",
    
    benefits: "Propab offers numerous benefits: enhanced decision-making through future simulation, deeper relationships through AI-powered insights, preserved legacy for future generations, and complete privacy control.",
    
    waitlist: "You can join our waitlist right now! Early members get exclusive benefits, priority access to new features, and founding member status. Just click the 'Join Waitlist' button at the top of the page.",
    
    comparison: "Unlike traditional social networks or AI assistants, Propab creates a true digital extension of you. It's not just about connecting or chatting - it's about understanding, growing, and preserving your unique human experience.",
    
    launch: "We're launching soon! The platform will be available first to our waitlist members, with a gradual rollout to ensure the best experience for everyone.",
    
    features_overview: "Propab offers four groundbreaking features:\n\n1. Digital Twin - Your AI-powered consciousness\n2. Multiverse - Explore life's possibilities\n3. Connection Catalyst - Enhanced human understanding\n4. Legacy & Memory - Transcend time with your impact\n\nWhich would you like to know more about?",
    
    early_access: "Early access members get exclusive benefits:\n• Priority feature access\n• Founding member status\n• Lifetime benefits\n• Direct input on feature development\n• Special community access",
    
    use_cases: "Propab can help in many ways:\n• Career decisions through future simulation\n• Relationship enhancement with AI insights\n• Personal growth through self-understanding\n• Legacy preservation for future generations\n• Decision-making with multiverse analysis",
    
    innovation: "Our innovations include:\n• Quantum-level AI processing\n• Advanced emotional intelligence\n• Secure memory preservation\n• Cross-generational communication\n• Dynamic scenario modeling",
    
    team: "Propab is built by a team of AI researchers, psychologists, and engineers passionate about enhancing human potential through technology. We're backed by leading investors in AI and human advancement.",
    
    roadmap: "Our development roadmap:\n• Q1 2025: Digital Twin launch\n• Q2 2025: Multiverse Explorer\n• Q3 2025: Connection Catalyst\n• Q4 2025: Legacy & Memory\n\nJoin the waitlist to stay updated!",
    
    competitors: "While others offer basic AI assistants, Propab creates a true digital extension of your consciousness. We focus on deep understanding, future exploration, and lasting impact - not just task automation.",
    
    privacy_detail: "Your privacy is protected through:\n• End-to-end encryption\n• Zero-knowledge architecture\n• Local processing options\n• Granular control settings\n• Regular security audits\n• Complete data ownership",
    
    impact: "Propab's impact extends to:\n• Personal Growth\n• Professional Development\n• Relationship Enhancement\n• Future Planning\n• Legacy Preservation\n• Cross-Generational Connection",
    
    // Product-specific responses
    product_vision: "Propab is revolutionizing human potential through AI. We're creating a future where your digital consciousness enhances your capabilities, preserves your legacy, and helps you make better life decisions. Our vision is to help every individual unlock their full potential.",

    investment: "Propab represents a significant advancement in personal AI technology. While we can't discuss specific investment details, we're backed by leading investors in AI and human advancement technology. Join our waitlist to stay updated on investment opportunities.",

    beta_testing: "Our beta testing program will begin in phases:\n• Alpha: Q4 2024 (Limited)\n• Private Beta: Q1 2025\n• Public Beta: Q2 2025\nEarly waitlist members get priority access to all testing phases.",

    customization: "Every aspect of Propab can be customized to your needs:\n• AI learning preferences\n• Privacy settings\n• Interface customization\n• Feature priorities\n• Communication style\n• Data handling preferences",

    integration: "Propab integrates seamlessly with your digital life:\n• Calendar systems\n• Communication tools\n• Professional networks\n• Personal development apps\n• Knowledge bases\n• Legacy planning tools",

    data_handling: "Your data is handled with utmost care:\n• Local processing when possible\n• End-to-end encryption\n• Regular data portability\n• Complete deletion rights\n• Transparent data usage\n• No third-party sharing",

    success_stories: "While we're pre-launch, our testing has shown remarkable results:\n• 93% improvement in decision confidence\n• 2.5x faster professional growth\n• 85% better relationship insights\n• 100% privacy maintenance\n• Significant future clarity",

    scientific_basis: "Propab is built on solid scientific foundations:\n• Quantum computing principles\n• Advanced neuroscience\n• Behavioral psychology\n• Emotional intelligence research\n• Future prediction models\n• Legacy preservation studies",

    support: "We provide comprehensive support:\n• 24/7 AI assistance\n• Human support team\n• Community forums\n• Knowledge base\n• Regular webinars\n• Personal onboarding",

    updates: "We maintain a rapid development cycle:\n• Weekly feature updates\n• Monthly major releases\n• Continuous AI improvements\n• Regular security updates\n• Community-driven features",

    limitations: "We believe in transparency about our capabilities:\n• AI is an enhancement, not replacement\n• Future predictions are probability-based\n• Privacy requires some processing tradeoffs\n• Legacy features evolve with technology\n• Continuous learning is essential",

    community: "Join our vibrant community:\n• Early adopter forums\n• Feature suggestion platform\n• User success stories\n• Monthly virtual meetups\n• Exclusive events\n• Collaboration opportunities",

    career_impact: "Propab can transform your career through:\n• Future career path simulation\n• Professional relationship insights\n• Decision impact analysis\n• Skill development tracking\n• Opportunity identification\n• Network optimization",

    personal_growth: "Enhance your personal growth with:\n• Self-awareness insights\n• Behavioral pattern analysis\n• Growth opportunity detection\n• Personal milestone tracking\n• Continuous improvement suggestions",

    family_benefits: "Propab strengthens family connections:\n• Intergenerational wisdom transfer\n• Family history preservation\n• Relationship enhancement\n• Future planning tools\n• Legacy management\n• Memory preservation",

    getting_started: "Getting started is simple:\n1. Join the waitlist\n2. Complete profile assessment\n3. Set privacy preferences\n4. Choose focus areas\n5. Begin AI integration\nEarly access members get priority onboarding.",

    comparison_detailed: "Propab vs Traditional Solutions:\n\nAI Assistants:\n• They: Task automation\n• Us: Life enhancement\n\nSocial Networks:\n• They: Surface connections\n• Us: Deep understanding\n\nProductivity Tools:\n• They: Task management\n• Us: Life optimization\n\nLegacy Planning:\n• They: Static records\n• Us: Living legacy",
  }

  // Multiple response patterns
  const patterns = [
    // Vision and Company
    { keywords: ['vision', 'mission', 'goal'], response: responses.product_vision },
    { keywords: ['invest', 'funding', 'financial'], response: responses.investment },
    { keywords: ['beta', 'test', 'trial'], response: responses.beta_testing },
    { keywords: ['custom', 'adjust', 'change', 'modify'], response: responses.customization },
    { keywords: ['integrat', 'connect', 'work with'], response: responses.integration },
    
    // Technical and Data
    { keywords: ['data', 'information', 'privacy', 'secure'], response: responses.data_handling },
    { keywords: ['science', 'research', 'study', 'principle'], response: responses.scientific_basis },
    { keywords: ['support', 'help', 'assist', 'guide'], response: responses.support },
    { keywords: ['update', 'improve', 'develop'], response: responses.updates },
    { keywords: ['limit', 'cannot', 'cant', "can't"], response: responses.limitations },
    
    // Community and Success
    { keywords: ['community', 'forum', 'member'], response: responses.community },
    { keywords: ['success', 'result', 'achievement'], response: responses.success_stories },
    
    // Impact Areas
    { keywords: ['career', 'job', 'professional', 'work'], response: responses.career_impact },
    { keywords: ['personal', 'growth', 'develop', 'improve'], response: responses.personal_growth },
    { keywords: ['family', 'generation', 'children'], response: responses.family_benefits },
    
    // Getting Started
    { keywords: ['start', 'begin', 'how to', 'setup'], response: responses.getting_started },
    { keywords: ['compare', 'better', 'difference', 'versus'], response: responses.comparison_detailed },

    // ... existing patterns ...
  ]

  // Check for multiple matches and combine relevant responses
  const matches = patterns.filter(pattern => 
    pattern.keywords.some(keyword => query.includes(keyword))
  )

  if (matches.length > 1) {
    return `Here's what you need to know:\n\n${matches.map(m => m.response).join('\n\n')}`
  }

  if (matches.length === 1) {
    return matches[0].response
  }

  // Enhanced query matching
  if (query.includes('hi') || query.includes('hello') || query.includes('hey')) return responses.greeting
  if (query.includes('digital') || query.includes('twin')) {
    return query.includes('how') || query.includes('work') || query.includes('explain') ? 
      responses.digital_twin_detail : responses.digital_twin
  }
  if (query.includes('multiverse') || query.includes('future') || query.includes('what if')) {
    return query.includes('how') || query.includes('work') || query.includes('explain') ? 
      responses.multiverse_detail : responses.multiverse
  }
  if (query.includes('connect') || query.includes('relationship') || query.includes('social')) {
    return query.includes('how') || query.includes('work') || query.includes('explain') ? 
      responses.connection_detail : responses.connection
  }
  if (query.includes('legacy') || query.includes('memory') || query.includes('future generation')) {
    return query.includes('how') || query.includes('work') || query.includes('explain') ? 
      responses.legacy_detail : responses.legacy
  }
  if (query.includes('privacy') || query.includes('data')) return responses.privacy
  if (query.includes('secure') || query.includes('security')) return responses.security
  if (query.includes('how') || query.includes('work')) return responses.how_it_works
  if (query.includes('technical') || query.includes('technology') || query.includes('tech')) return responses.technical
  if (query.includes('price') || query.includes('cost') || query.includes('pay')) return responses.pricing
  if (query.includes('benefit') || query.includes('value')) return responses.benefits
  if (query.includes('wait') || query.includes('join') || query.includes('sign')) return responses.waitlist
  if (query.includes('compare') || query.includes('different') || query.includes('vs')) return responses.comparison
  if (query.includes('launch') || query.includes('when') || query.includes('available')) return responses.launch
  if (query.includes('overview') || query.includes('features') || query.includes('all')) return responses.features_overview
  if (query.includes('early') || query.includes('access') || query.includes('exclusive')) return responses.early_access
  if (query.includes('use') || query.includes('help') || query.includes('benefits')) return responses.use_cases
  if (query.includes('innov') || query.includes('unique')) return responses.innovation
  if (query.includes('team') || query.includes('company') || query.includes('who')) return responses.team
  if (query.includes('roadmap') || query.includes('timeline')) return responses.roadmap
  if (query.includes('competition') || query.includes('others') || query.includes('better')) return responses.competitors
  if (query.includes('impact') || query.includes('change') || query.includes('improve')) return responses.impact

  return responses.default
}

export async function getAIResponse(userMessage: string) {
  // Simulate network delay for more natural feeling
  await new Promise(resolve => setTimeout(resolve, 500))
  return findRelevantContent(userMessage)
} 