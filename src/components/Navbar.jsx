import { NavLink } from 'react-router-dom';
import { Rocket } from 'lucide-react';

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-white bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'
  }`;

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-black/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-cyan-500 to-fuchsia-500">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide">DSC VIT Bhopal</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/events" className={navLinkClass}>
              Events
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <a
            href="https://forms.gle/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white"
          >
            Join Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
