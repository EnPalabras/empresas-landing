import './App.css'
import Comments from './components/Comments'
import Empresas from './components/Empresas'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import JuegosInfo from './components/JuegosInfo'
import Proceso from './components/Proceso'
import SocialProof from './components/SocialProof'

function App() {
  return (
    <>
      <main className="px-2 md:px-4">
        <Header />

        <HeroSection />
        <JuegosInfo />
        <SocialProof />
        <Empresas />
      </main>
      <Comments />
      <Proceso />

      <FAQ />
      <Footer />
    </>
  )
}

export default App
