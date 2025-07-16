import Navbar from '@/components/NavBar/Navbar'
import Intro from '@/components/Intro/Intro'
import Skills from '@/components/Skills/Skills'
import Experience from '@/components/Experience/Experience'
import Projects from '@/components/Projects/Projects'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
} 