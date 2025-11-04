import { Calendar, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Intro to Machine Learning Workshop',
    date: 'Nov 15, 2025',
    location: 'Innovation Lab, Block A',
    description:
      'Hands-on session covering supervised learning fundamentals with scikit-learn and practical exercises.',
    tag: 'Workshop',
  },
  {
    title: 'DataViz Challenge: Tell a Story',
    date: 'Nov 28, 2025',
    location: 'Auditorium 2',
    description:
      'Team-based challenge to turn raw data into compelling visual narratives using Python, Tableau, or Web tools.',
    tag: 'Challenge',
  },
  {
    title: 'Career Panel: Paths in Data',
    date: 'Dec 6, 2025',
    location: 'Online (Zoom)',
    description:
      'Hear from alumni and industry professionals about roles across ML, analytics, research, and data engineering.',
    tag: 'Panel',
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Upcoming Events</h2>
          <p className="mt-3 text-slate-600">
            Join our sessions to level up your skills, meet collaborators, and build your portfolio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <article key={e.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700">
                {e.tag}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
                {e.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{e.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-700">
                <span className="inline-flex items-center gap-1"><Calendar size={16} /> {e.date}</span>
                <span className="inline-flex items-center gap-1"><MapPin size={16} /> {e.location}</span>
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Register Interest →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
