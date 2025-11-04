import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white">
              <Rocket size={18} />
            </span>
            <span className="tracking-tight">VIT Bhopal • Data Science Club</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm shadow-sm hover:bg-slate-800"
            >
              Join Us
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#events"
              onClick={() => setOpen(false)}
              className="block text-center rounded-md bg-slate-900 text-white px-4 py-2"
            >
              Join Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
