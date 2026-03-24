import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const socials = [
  { icon: FiGithub,   href: 'https://github.com' },
  { icon: FiLinkedin, href: 'https://linkedin.com' },
  { icon: FiTwitter,  href: 'https://twitter.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-olive-200 dark:border-olive-800 bg-cream dark:bg-ink">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div>
          <div className="font-display text-lg text-olive-700 dark:text-olive-300 mb-1">
            AC<span className="text-olive-400">.</span>
          </div>
          <p className="font-body text-xs text-ink/40 dark:text-cream/40">
            © {year} Alex Chen. Built with React &amp; Tailwind.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap gap-6 justify-center">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="font-body text-xs text-ink/50 dark:text-cream/50 hover:text-olive-600 dark:hover:text-olive-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-ink/40 dark:text-cream/40 hover:text-olive-600 dark:hover:text-olive-300 hover:bg-olive-100 dark:hover:bg-olive-800 transition-all"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
