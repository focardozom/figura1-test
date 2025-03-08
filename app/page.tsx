import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SectionBanner from './components/SectionBanner'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      <Hero />
      
      {/* Banner before Services */}
      <SectionBanner 
        imagePath="/cta-image.jpg" 
        overlayColor="from-gray-50"
      />
      <Services />
      
      {/* Banner before Testimonials */}
      <SectionBanner 
        imagePath="/cta-image-mobile.jpg" 
        overlayColor="from-gray-50"
      />
      <Testimonials />
      
      {/* Banner before Contact */}
      <SectionBanner 
        imagePath="/header-image.jpg" 
        overlayColor="from-gray-100"
      />
      <Contact />

      <SectionBanner 
        imagePath="/cta-image.jpg" 
        overlayColor="from-gray-50"
      />
      
      <Footer />
    </main>
  )
} 