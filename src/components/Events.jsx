const events = [
  {
    id: 1,
    title: 'Intro to Machine Learning',
    date: 'Nov 18, 2025',
    location: 'Auditorium A',
    link: '#',
  },
  {
    id: 2,
    title: 'Hands-on: Data Viz with Python',
    date: 'Dec 02, 2025',
    location: 'Lab 3, Block C',
    link: '#',
  },
  {
    id: 3,
    title: 'AI Ethics Roundtable',
    date: 'Dec 15, 2025',
    location: 'Seminar Hall',
    link: '#',
  },
];

const Events = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
      <p className="mt-2 text-white/70">Learn, build, and grow with our weekly sessions and special workshops.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => (
          <article
            key={e.id}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20"
          >
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="mt-2 text-sm text-white/70">{e.date} • {e.location}</p>
            <a
              href={e.link}
              className="mt-4 inline-block rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              Register
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Events;
