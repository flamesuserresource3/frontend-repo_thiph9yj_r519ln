import { ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full border border-slate-200 text-slate-600 bg-white/70 backdrop-blur">
            <Users size={14} /> Student-run community • VIT Bhopal University
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Data Science Club
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Learn, build, and collaborate on real-world projects across machine learning, AI, and data engineering. We host hands-on workshops, speaker sessions, hack nights, and mentorship for all skill levels.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-indigo-500"
            >
              See Upcoming Events <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              What We Do
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
