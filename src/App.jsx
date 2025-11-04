import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Footer from './components/Footer';

function About() {
  return (
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
              <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />Hands-on workshops and code-alongs</li>
              <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />Open-source and research-driven projects</li>
              <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />Peer mentorship and interview prep</li>
              <li className="inline-flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />Hackathons, talks, and community meetups</li>
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
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Events />
        <About />
      </main>
      <Footer />
    </div>
  );
}
