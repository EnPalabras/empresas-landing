import './App.css'
import FAQ from './components/FAQ'
// import SocialProof from './components/SocialProof'
import Testimonials from './components/Testimonials'
import LogoBrands from './components/LogoBrands'
import CTAFooter from './components/CTAFooter'
import Footer from './components/Footer'
import SocialProof2 from './components/SocialProof2'
import HeroSection from './components/HeroSection'
import { Header2 } from './components/Header'
import InfoJuegos from './components/InfoJuegos'

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      {/* <SocialProof /> */}
      <Header2 />
      <HeroSection />
      <InfoJuegos />

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
