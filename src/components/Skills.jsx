import { useEffect, useRef, useState } from 'react'
import {
  SiReact, SiMysql, SiNodedotjs, SiNextdotjs, SiPostgresql, SiDocker, SiTailwindcss,
  SiGit, SiFigma,
  SiJavascript,
} from 'react-icons/si'
import { FaAws, FaJava } from "react-icons/fa";

const categories = {
  Frontend: [
    { name: 'React',       icon: SiReact,       level: 95 },
    { name: 'Next.js',     icon: SiNextdotjs,   level: 85 },
    { name: 'Tailwind',    icon: SiTailwindcss, level: 90 },
    { name: 'Figma',       icon: SiFigma,       level: 70 },
  ],
  Backend: [
    { name: 'Node.js',    icon: SiNodedotjs,  level: 90 },
    { name: 'Java',       icon: FaJava,  level: 85 },
    { name: 'JavaScript', icon: SiJavascript, level: 82 },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 80 },
    { name: 'MySQL',      icon: SiMysql, level: 75 },
  ],
  DevOps: [
    { name: 'AWS', icon: FaAws, level: 75 },
    { name: 'Docker', icon: SiDocker,            level: 80 },
    { name: 'Git',    icon: SiGit,               level: 92 },
  ],
}

function SkillBar({ level, animate }) {
  return (
    <div className="h-1.5 rounded-full bg-olive-100 dark:bg-olive-800 overflow-hidden">
      <div
        className="h-full rounded-full bg-olive-500 dark:bg-olive-400 transition-all duration-1000 ease-out"
        style={{ width: animate ? `${level}%` : '0%' }}
      />
    </div>
  )
}

export default function Skills() {
  const [tab, setTab] = useState('Frontend')
  const [animate, setAnimate] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setAnimate(true) }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => { setAnimate(false); setTimeout(() => setAnimate(true), 50) }, [tab])

  const skills = categories[tab]

  return (
    <section id="skills" className="py-24 bg-cream dark:bg-ink">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <p className="section-tag mb-3 reveal">What I work with</p>
        <h2 className="section-heading mb-10 reveal reveal-delay-1">Skills &amp; tools</h2>

        {/* Tabs */}
        <div className="flex gap-2 mb-10 reveal reveal-delay-2">
          {Object.keys(categories).map(cat => (
            <button
              key={cat}
              onClick={() => setTab(cat)}
              className={`px-5 py-2 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                tab === cat
                  ? 'bg-olive-600 text-cream shadow-sm'
                  : 'border border-olive-200 dark:border-olive-700 text-ink/60 dark:text-cream/60 hover:bg-olive-100 dark:hover:bg-olive-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map(({ name, icon: Icon, level }, i) => (
            <div
              key={name}
              className="card-base p-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-olive-100 dark:bg-olive-800 text-olive-600 dark:text-olive-400">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-ink dark:text-cream">{name}</div>
                  <div className="font-mono text-xs text-olive-500 dark:text-olive-400">{level}%</div>
                </div>
              </div>
              <SkillBar level={level} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
