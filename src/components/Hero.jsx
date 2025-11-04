import Background3D from './Background3D';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Data Science Club
            <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent">
              VIT Bhopal University
            </span>
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            We are a community of learners, builders, and researchers exploring AI, ML, and data-driven
            products. Join us for hands-on workshops, projects, and hackathons.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/events"
              className="rounded-md bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:opacity-95"
            >
              Upcoming Events
            </a>
            <a
              href="/blog"
              className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
            >
              Read the Blog
            </a>
          </div>
        </div>
      </div>
      <Background3D />
    </section>
  );
};

export default Hero;
