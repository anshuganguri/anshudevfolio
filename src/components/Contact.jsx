import { useState } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiSend, FiCheck } from 'react-icons/fi'

const socials = [
  { icon: FiGithub,   label: 'GitHub',   href: 'https://github.com',   handle: '@alexchen' },
  { icon: FiLinkedin, label: 'LinkedIn',  href: 'http://linkedin.com/in/ganguri-anshu-568052298', handle: 'anshu-ganguri' },
  { icon: FiTwitter,  label: 'Twitter',   href: 'https://twitter.com',  handle: '@alexchen_dev' },
  { icon: FiMail,     label: 'Email',     href: 'mailto:hello@alexchen.dev', handle: 'hello@alexchen.dev' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Simulate async submit
    await new Promise(r => setTimeout(r, 1400))
    setStatus('success')
    setTimeout(() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }) }, 3500)
  }

  return (
    <section id="contact" className="py-24 bg-white dark:bg-olive-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-tag mb-3 reveal">Get in touch</p>
        <h2 className="section-heading mb-4 reveal reveal-delay-1">Let's work together</h2>
        <p className="font-body text-ink/60 dark:text-cream/60 max-w-md mb-12 reveal reveal-delay-2">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Social links */}
          <div className="reveal reveal-delay-2">
            <div className="space-y-4 mb-10">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-base hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-xl bg-olive-100 dark:bg-olive-800 text-olive-600 dark:text-olive-400 group-hover:bg-olive-600 group-hover:text-cream dark:group-hover:bg-olive-500 transition-all">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="font-body text-sm font-medium text-ink dark:text-cream">{label}</div>
                    <div className="font-mono text-xs text-ink/50 dark:text-cream/50">{handle}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-olive-50 dark:bg-olive-900/60 border border-olive-200 dark:border-olive-700">
              <div className="font-mono text-xs text-olive-500 mb-1">Current status</div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-body text-sm text-ink/70 dark:text-cream/70">Available for Internship &amp; full-time roles</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 reveal reveal-delay-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-body text-xs font-medium text-ink/60 dark:text-cream/60 mb-1.5">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-xl border border-olive-200 dark:border-olive-700 bg-white dark:bg-olive-900 font-body text-sm text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-olive-400 dark:focus:ring-olive-500 transition-all"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-ink/60 dark:text-cream/60 mb-1.5">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-olive-200 dark:border-olive-700 bg-white dark:bg-olive-900 font-body text-sm text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-olive-400 dark:focus:ring-olive-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs font-medium text-ink/60 dark:text-cream/60 mb-1.5">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                className="w-full px-4 py-2.5 rounded-xl border border-olive-200 dark:border-olive-700 bg-white dark:bg-olive-900 font-body text-sm text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-olive-400 dark:focus:ring-olive-500 transition-all"
              />
            </div>

            <div>
              <label className="block font-body text-xs font-medium text-ink/60 dark:text-cream/60 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-2.5 rounded-xl border border-olive-200 dark:border-olive-700 bg-white dark:bg-olive-900 font-body text-sm text-ink dark:text-cream placeholder:text-ink/30 dark:placeholder:text-cream/30 focus:outline-none focus:ring-2 focus:ring-olive-400 dark:focus:ring-olive-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full py-3 rounded-xl font-body font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                status === 'success'
                  ? 'bg-green-600 text-white'
                  : 'btn-primary'
              }`}
            >
              {status === 'idle' && <><FiSend size={15} /> Send message</>}
              {status === 'loading' && (
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
              )}
              {status === 'success' && <><FiCheck size={15} /> Message sent!</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
