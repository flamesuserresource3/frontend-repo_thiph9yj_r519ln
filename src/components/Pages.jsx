import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Events from './Events';
import Blog from './Blog';

const Section = ({ title, children }) => (
  <section className="mx-auto max-w-6xl px-4 py-16">
    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    <div className="mt-4 text-white/80">{children}</div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <Events />
    <Blog />
  </>
);

const EventsPage = () => (
  <>
    <Section title="Events">
      <p>Explore workshops, talks, and hackathons hosted by the club.</p>
    </Section>
    <Events />
  </>
);

const AboutPage = () => (
  <Section title="About the Club">
    <p>
      The Data Science Club at VIT Bhopal is a student-led community focused on AI/ML, data engineering,
      data visualization, and research. We host weekly sessions, project cohorts, and mentorship programs.
    </p>
  </Section>
);

const BlogPage = () => (
  <>
    <Section title="Blog">
      <p>Insights and stories from our members and collaborators.</p>
    </Section>
    <Blog />
  </>
);

const ContactPage = () => (
  <Section title="Contact">
    <p>
      Have questions or want to collaborate? Reach us at
      <a href="mailto:dsc@vitbhopal.ac.in" className="ml-1 underline decoration-cyan-400 underline-offset-4">
        dsc@vitbhopal.ac.in
      </a>
      .
    </p>
  </Section>
);

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default Pages;
