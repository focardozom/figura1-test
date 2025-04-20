import Hero from './components/Hero'
import Services from './components/Services'
import ExperienceBrief from './components/ExperienceBrief'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-800">
      <Hero />
      <Services />
      <ExperienceBrief />
      <Contact />
      <Footer />
    </main>
  )
} 