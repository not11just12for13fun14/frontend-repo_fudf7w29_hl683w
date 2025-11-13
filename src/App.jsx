import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function Footer(){
  return (
    <footer className="py-10 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Deyu Creative. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#work" className="hover:text-blue-700">Work</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar brand="Deyu Creative" />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
