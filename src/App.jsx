import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { Github, Linkedin, Globe, Mail, ExternalLink, ServerCog, Boxes, Code2, Database, Cloud, ShieldCheck } from 'lucide-react'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
      {children}
    </span>
  )
}

function Tag({ children }) {
  return (
    <span className="rounded-md bg-slate-800/80 text-slate-100 text-[11px] px-2 py-1 ring-1 ring-white/10">{children}</span>
  )
}

const projects = [
  {
    title: 'Enterprise Booking Platform',
    blurb: 'Microservice-first .NET 7 + Angular 16 platform handling 2M+ monthly bookings.',
    tags: ['.NET 7', 'ASP.NET Core', 'Angular', 'Nx', 'Azure', 'Redis', 'PostgreSQL'],
    links: [{ href: '#', label: 'Case Study' }],
  },
  {
    title: 'Developer Portal & Design System',
    blurb: 'Internal portal with role-based access, reusable UI library and CI/CD.',
    tags: ['Angular', 'Storybook', 'Nx', 'C#', 'Keycloak', 'Docker', 'Kubernetes'],
    links: [{ href: '#', label: 'Overview' }],
  },
  {
    title: 'Real-time Telemetry Dashboard',
    blurb: 'SignalR-powered observability dashboard with WebSockets and caching layers.',
    tags: ['SignalR', 'ASP.NET', 'Angular', 'RxJS', 'gRPC', 'TimescaleDB'],
    links: [{ href: '#', label: 'Demo' }],
  },
]

export default function App() {
  const skills = useMemo(
    () => [
      { icon: <Code2 className="h-5 w-5" />, label: 'Backend', items: ['C#', 'ASP.NET Core', 'Minimal APIs', 'gRPC', 'SignalR'] },
      { icon: <Boxes className="h-5 w-5" />, label: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Storybook'] },
      { icon: <Database className="h-5 w-5" />, label: 'Data', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Dapper', 'EF Core'] },
      { icon: <Cloud className="h-5 w-5" />, label: 'Cloud & DevOps', items: ['Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'] },
      { icon: <ServerCog className="h-5 w-5" />, label: 'Architecture', items: ['DDD', 'CQRS', 'Event-Driven', 'Microservices', 'Clean Architecture'] },
      { icon: <ShieldCheck className="h-5 w-5" />, label: 'Quality', items: ['xUnit', 'Playwright', 'SonarQube', 'OWASP', 'SAST/DAST'] },
    ],
    []
  )

  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24" id="home">
        <div className="absolute inset-0 bg-grid-slate opacity-40 mask-gradient" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="py-6">
              <div className="flex flex-wrap gap-2 mb-5">
                <Pill>.NET</Pill>
                <Pill>Angular</Pill>
                <Pill>Azure</Pill>
                <Pill>Full‑Stack</Pill>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight gradient-text">
                Software Engineer focused on .NET & Angular
              </h1>
              <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
                I build robust, cloud-ready platforms with clean architecture, solid testing, and delightful user experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-400 text-white px-5 py-3 font-medium transition-colors">
                  <ExternalLink className="h-4 w-4" /> View Projects
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium transition-colors ring-1 ring-white/10">
                  <Mail className="h-4 w-4" /> Contact
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] hover:bg-[#0e76d1] text-white px-5 py-3 font-medium">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl glass">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b1220] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold">About</h2>
              <p className="mt-3 text-slate-300">10+ years crafting maintainable systems with a business-first mindset.</p>
            </div>
            <div className="lg:col-span-2 space-y-4 text-slate-300">
              <p>
                I specialize in building scalable APIs with ASP.NET Core and rich frontends with Angular. I love clean architecture, domain modeling, and creating DX-friendly codebases that teams enjoy working in.
              </p>
              <p>
                Recent focus includes cloud-native services on Azure, event-driven designs, and end-to-end testing pipelines that keep velocity high without sacrificing quality.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['C#', 'ASP.NET Core', 'Angular', 'TypeScript', 'Azure', 'SQL', 'MongoDB', 'Docker', 'K8s'].map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div key={group.label} className="rounded-2xl glass p-6 hover-card">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                    {group.icon}
                  </div>
                  <h3 className="font-semibold">{group.label}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <Pill key={it}>{it}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <a href="#contact" className="text-sm text-indigo-300 hover:text-indigo-200">Open to freelance →</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article whileHover={{ y: -4 }} key={p.title} className="group rounded-2xl glass p-6 hover-card">
                <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/20 ring-1 ring-white/10" />
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} className="inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200">
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
          <div className="relative border-l border-white/10 pl-6">
            {[{
              role: 'Senior Software Engineer',
              company: 'Fintech Co.',
              period: '2021 — Present',
              desc: 'Led migration to .NET 7 microservices, introduced Nx for Angular monorepo, and improved lead time by 35%.',
            }, {
              role: 'Full‑Stack Engineer',
              company: 'HealthTech',
              period: '2018 — 2021',
              desc: 'Built patient portal with ASP.NET Core + Angular, rolled out CI/CD on Azure DevOps.',
            }, {
              role: 'Software Engineer',
              company: 'Consultancy',
              period: '2015 — 2018',
              desc: 'Delivered line-of-business apps with clean architecture and automated testing suites.',
            }].map((e) => (
              <div key={e.role} className="mb-8">
                <div className="absolute -left-1.5 mt-1 h-3 w-3 rounded-full bg-indigo-400 ring-2 ring-[#0b1220]" />
                <h3 className="font-semibold">{e.role} · <span className="text-slate-300">{e.company}</span></h3>
                <p className="text-sm text-slate-400">{e.period}</p>
                <p className="mt-2 text-slate-300">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold">Let’s build something</h2>
              <p className="mt-3 text-slate-300">Currently available for senior roles and select freelance projects.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 font-medium">
                  <Mail className="h-4 w-4" /> you@example.com
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-5 py-3 font-medium">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] hover:bg-[#0e76d1] text-white px-5 py-3 font-medium">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 font-medium">
                  <Globe className="h-4 w-4" /> Download CV
                </a>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl glass p-6 space-y-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-md bg-white/5 px-3 py-2 ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-400 outline-none" placeholder="Tell me about your project..." />
              </div>
              <button className="w-full rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 font-medium">Send</button>
              <p className="text-xs text-slate-400">This demo form doesn’t send yet. Use the email button to reach out.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} .NET / Angular Engineer Portfolio
      </footer>
    </div>
  )
}
