import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Events from './Events';
import Blog from './Blog';

function SectionContainer({ children }) {
  return (
    <div className="relative z-10">
      {children}
    </div>
  );
}

function HomePage() {
  return (
    <SectionContainer>
      <Hero />
      <Events />
      <section id="about" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What We Do</h2>
              <p className="mt-4 text-slate-600">
                We create a welcoming space to explore the data-to-decisions pipeline: statistics, machine learning,
                MLOps, and responsible AI. Our initiatives include weekly study circles, project pods, mentorship,
                and campus collaborations with research groups and industry partners.
              </p>
              <ul className="mt-6 grid gap-3 text-slate-700">
                <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />Hands-on workshops and code-alongs</li>
                <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />Open-source and research-driven projects</li>
                <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />Peer mentorship and interview prep</li>
                <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />Hackathons, talks, and community meetups</li>
              </ul>
            </div>
            <div>
              <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-3xl font-extrabold text-slate-900">500+</div>
                    <div className="mt-1 text-sm text-slate-600">Members</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-3xl font-extrabold text-slate-900">30+</div>
                    <div className="mt-1 text-sm text-slate-600">Events/Year</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-3xl font-extrabold text-slate-900">50+</div>
                    <div className="mt-1 text-sm text-slate-600">Projects</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-500">Numbers are indicative of our growing community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
    </SectionContainer>
  );
}

function EventsPage() {
  return (
    <SectionContainer>
      <div className="pt-20" />
      <Events />
    </SectionContainer>
  );
}

function AboutPage() {
  return (
    <SectionContainer>
      <div className="pt-20" />
      <section className="py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">About the Club</h1>
          <p className="mt-4 text-slate-700">
            We are a student-led club at VIT Bhopal focused on learning by doing. Our mission is to build
            a collaborative community around data science, machine learning, and AI. We host workshops,
            talks, build projects, and connect students with mentors and opportunities.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Our Pillars</h3>
              <ul className="mt-3 space-y-2 text-slate-700 list-disc list-inside">
                <li>Learning & Mentorship</li>
                <li>Open Source & Research</li>
                <li>Community & Collaboration</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Tech Stack We Love</h3>
              <p className="mt-2 text-slate-700">Python, scikit-learn, PyTorch, TensorFlow, FastAPI, MongoDB, Next.js, and more.</p>
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}

function BlogPage() {
  return (
    <SectionContainer>
      <div className="pt-20" />
      <Blog />
    </SectionContainer>
  );
}

function ContactPage() {
  return (
    <SectionContainer>
      <div className="pt-20" />
      <section className="py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-700">Have questions or want to collaborate? Send us a message and we’ll get back to you.</p>

          <form className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea placeholder="Your message" rows={5} className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button type="button" className="inline-flex w-fit items-center justify-center rounded-md bg-emerald-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-emerald-500">Send message</button>
          </form>
        </div>
      </section>
    </SectionContainer>
  );
}

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
