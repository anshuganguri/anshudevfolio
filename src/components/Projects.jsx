import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import projects from '../data/projects.json'

const filters = ['All', 'Featured', 'React', 'Next.js', 'Python', 'Go']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = projects.filter(p => {
    if (filter === 'All') return true
    if (filter === 'Featured') return p.featured
    return p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
  })

  return (
    <section id="projects" className="py-24 bg-white dark:bg-olive-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag mb-3 reveal">What I've built</p>
        <h2 className="section-heading mb-4 reveal reveal-delay-1">Projects</h2>
        <p className="font-body text-ink/60 dark:text-cream/60 mb-10 max-w-lg reveal reveal-delay-2">
          A selection of products I've designed and engineered — from side projects to production systems.
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 reveal reveal-delay-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-medium transition-all duration-200 ${
                filter === f
                  ? 'bg-olive-600 text-cream'
                  : 'border border-olive-200 dark:border-olive-700 text-ink/60 dark:text-cream/60 hover:bg-olive-100 dark:hover:bg-olive-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="card-base overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-400"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.featured && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-olive-600 text-cream font-mono text-xs rounded-full">
                      Featured
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-cream rounded-full text-ink hover:scale-110 transition-transform"
                    >
                      <FiGithub size={16} />
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-olive-600 rounded-full text-cream hover:scale-110 transition-transform"
                    >
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl text-ink dark:text-cream mb-2">{p.title}</h3>
                  <p className="font-body text-sm text-ink/60 dark:text-cream/60 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map(t => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-mono text-xs text-olive-700 dark:text-olive-300 bg-olive-100 dark:bg-olive-800/60 border border-olive-200 dark:border-olive-700 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-body text-xs text-ink/50 dark:text-cream/50 hover:text-olive-600 dark:hover:text-olive-300 transition-colors"
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-body text-xs text-olive-600 dark:text-olive-400 hover:text-olive-700 dark:hover:text-olive-300 transition-colors font-medium"
                    >
                      <FiExternalLink size={13} /> Live demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
