import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi'
import { useTypingEffect } from '../hooks/useTypingEffect'

const roles = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Open Source Contributor', 'Problem Solver']

const socials = [
  { icon: FiGithub,   href: 'https://github.com/anshuganguri',   label: 'GitHub' },
  { icon: FiLinkedin, href: 'http://linkedin.com/in/ganguri-anshu-568052298',  label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com',   label: 'Twitter' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const role = useTypingEffect(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cream dark:bg-ink"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(#6b6b30 1px, transparent 1px), linear-gradient(90deg, #6b6b30 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Olive glow blob */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-olive-300/20 dark:bg-olive-700/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-olive-200/20 dark:bg-olive-800/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          {/* Tag */}
          <motion.p variants={item} className="section-tag mb-5">
            👋 &nbsp;Available for opportunities
          </motion.p>

          {/* Name */}
          <motion.h1 variants={item} className="font-display text-6xl md:text-8xl text-ink dark:text-cream mb-4 leading-none">
            Ganguri
            <br />
            <span className="text-olive-500">Devi Anshu</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div variants={item} className="font-mono text-xl md:text-2xl text-olive-600 dark:text-olive-400 mb-6 h-8">
            <span className="typing-cursor">{role}</span>
          </motion.div>

          {/* Bio */}
          <motion.p variants={item} className="font-body text-lg text-ink/60 dark:text-cream/60 max-w-xl leading-relaxed mb-10">
            I build fast, accessible, and beautiful digital products. 5+ years crafting end-to-end
            experiences — from pixel-perfect UIs to distributed backend systems.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View my work
              <span className="ml-1">→</span>
            </button>
            <a href="/resume.pdf" download className="btn-outline">
              Download CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-olive-200 dark:border-olive-700 text-olive-600 dark:text-olive-400 hover:bg-olive-100 dark:hover:bg-olive-800 hover:scale-110 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-olive-400 dark:text-olive-500 hover:text-olive-600 dark:hover:text-olive-300 transition-colors group"
        >
          <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
