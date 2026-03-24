import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import './App.css'

function Portfolio() {
  useScrollReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}
