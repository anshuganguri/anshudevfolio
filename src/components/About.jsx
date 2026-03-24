import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 5,    suffix: '+', label: 'Years experience' },
  { value: 40,   suffix: '+', label: 'Projects shipped' },
  { value: 12,   suffix: '',  label: 'Open source repos' },
  { value: 99,   suffix: '%', label: 'Client satisfaction' },
]

const skills = ['React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Redis']

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = Math.ceil(value / 40)
        const timer = setInterval(() => {
          start += step
          if (start >= value) { setCount(value); clearInterval(timer) }
          else setCount(start)
        }, 30)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-olive-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="section-tag mb-3 reveal">About me</p>
            <h2 className="section-heading mb-6 reveal reveal-delay-1">
              Crafting digital<br />
              <em>experiences</em> that matter
            </h2>
            <div className="space-y-4 reveal reveal-delay-2">
              <p className="font-body text-ink/70 dark:text-cream/70 leading-relaxed">
                I'm a full-stack developer based in San Francisco with a passion for building
                products that combine technical rigor with thoughtful design. I believe great software
                is invisible — it just works, delightfully.
              </p>
              <p className="font-body text-ink/70 dark:text-cream/70 leading-relaxed">
                When I'm not pushing pixels or wrangling APIs, you'll find me contributing to
                open-source projects, writing about web performance, or exploring the mountains
                with a camera in hand.
              </p>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2 mt-8 reveal reveal-delay-3">
              {skills.map(s => (
                <span
                  key={s}
                  className="px-3 py-1 font-mono text-xs text-olive-700 dark:text-olive-300 bg-olive-100 dark:bg-olive-800/60 border border-olive-200 dark:border-olive-700 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-2">
            {stats.map(({ value, suffix, label }) => (
              <div
                key={label}
                className="card-base p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="font-display text-4xl text-olive-600 dark:text-olive-400 mb-1">
                  <Counter value={value} suffix={suffix} />
                </div>
                <div className="font-body text-sm text-ink/50 dark:text-cream/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
