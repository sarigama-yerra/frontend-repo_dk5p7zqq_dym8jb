import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? "backdrop-blur-md bg-slate-900/70 border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-white text-xs font-bold shadow-inner">FN</span>
            <span className="text-sm font-semibold text-white/90 tracking-wide">Full‑Stack .NET / Angular</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href="#contact" className="rounded-lg bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm font-medium ring-1 ring-white/10 transition-colors">Say hello</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" aria-label="Contact" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg text-white/90 hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/70 p-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" aria-label="Contact" className="p-2 rounded-lg hover:bg-white/10 text-white/90">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
