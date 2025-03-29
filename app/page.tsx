import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import UpcomingFeatures from '@/components/sections/UpcomingFeatures'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import FloatingChat from '@/components/FloatingChat'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero id="home" />
      <Features id="features" />
      <HowItWorks id="how-it-works" />
      <Testimonials id="testimonials" />
      <UpcomingFeatures id="upcoming" />
      <CTA />
      <Footer />
      <FloatingChat />
    </main>
  )
}
