import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { HiSun, HiMoon, HiBars3, HiXMark } from 'react-icons/hi2'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/90 dark:bg-ink/90 backdrop-blur-md border-b border-olive-200 dark:border-olive-800 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl text-olive-700 dark:text-olive-300 hover:text-olive-500 transition-colors"
        >
          GA<span className="text-olive-400">!</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`font-body text-sm font-medium transition-colors relative group ${
                active === l.href
                  ? 'text-olive-600 dark:text-olive-300'
                  : 'text-ink/60 dark:text-cream/60 hover:text-olive-600 dark:hover:text-olive-300'
              }`}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-olive-500 transition-all duration-300 ${active === l.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}

          <button
            onClick={toggle}
            className="ml-4 p-2 rounded-lg border border-olive-200 dark:border-olive-700 hover:bg-olive-100 dark:hover:bg-olive-800 text-olive-600 dark:text-olive-300 transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button onClick={toggle} className="p-2 text-olive-600 dark:text-olive-300">
            {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} className="p-2 text-olive-600 dark:text-olive-300">
            {menuOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream dark:bg-ink border-b border-olive-200 dark:border-olive-800 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {links.map(l => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="text-left font-body text-sm font-medium text-ink/70 dark:text-cream/70 hover:text-olive-600 dark:hover:text-olive-300 transition-colors py-1"
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
