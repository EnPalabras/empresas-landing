import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ from './components/FAQ'
import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'
import LogoBrands from './components/LogoBrands'
import CTAFooter from './components/CTAFooter'
import Footer from './components/Footer'
import SocialProof2 from './components/SocialProof2'

// const hola = import.meta.env.VITE_URL

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      <SocialProof />
      <SocialProof2 />
      <Testimonials />
      <LogoBrands />
      <FAQ />
      <CTAFooter />
      <Footer />
    </main>
  )
}

export default App
