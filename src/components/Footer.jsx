import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Reach Out</h3>
            <p className="mt-2 text-slate-600">
              Have questions or want to collaborate? We love hearing from students, faculty, and partners.
            </p>
            <div className="mt-4 space-y-2 text-slate-700">
              <a href="mailto:dsclub@vitbhopal.ac.in" className="inline-flex items-center gap-2 hover:text-indigo-600">
                <Mail size={18} /> dsclub@vitbhopal.ac.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-slate-700">
              <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#events" className="hover:text-indigo-600">Events</a></li>
              <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">Follow</h3>
            <div className="mt-3 flex items-center gap-3 text-slate-700">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:border-slate-300"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:border-slate-300"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Data Science Club • VIT Bhopal University.</p>
          <p className="text-center sm:text-right">Built by the student community for the student community.</p>
        </div>
      </div>
    </footer>
  );
}
