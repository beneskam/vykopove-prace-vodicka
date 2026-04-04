import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Services from '@/components/Services'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import Process from '@/components/Process'
import Gallery from '@/components/Gallery'
import Machine from '@/components/Machine'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main style={{ display: 'block', margin: 0, padding: 0 }}>
        <Hero />
        <Ticker />
        <Services />
        <Stats />
        <Projects />
        <Process />
        <Gallery />
        <Machine />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
