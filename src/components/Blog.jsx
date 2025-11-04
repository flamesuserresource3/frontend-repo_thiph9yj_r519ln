import { BookOpen, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'From Data to Decisions: A Beginner’s Guide',
    excerpt:
      'A friendly walkthrough of the data science lifecycle with tips, tools, and resources to get started fast.',
    tag: 'Getting Started',
  },
  {
    title: 'Building Your First ML Model at VIT Bhopal',
    excerpt:
      'We train a classifier, evaluate it properly, and discuss common pitfalls students face on their first project.',
    tag: 'Machine Learning',
  },
  {
    title: 'Visualization that Speaks: Crafting Insightful Charts',
    excerpt:
      'Learn principles of visual encoding, color, and storytelling to turn raw charts into compelling narratives.',
    tag: 'Data Viz',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1.5 rounded-full text-xs font-medium">
            <BookOpen size={14} /> Blog & Resources
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Latest from the Club</h2>
          <p className="mt-3 text-slate-600">Articles, guides, and recaps written by our members.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium bg-emerald-100 text-emerald-800">
                {p.tag}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-emerald-700">
                {p.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">{p.excerpt}</p>
              <a href="#" className="mt-6 inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-600 font-medium">
                Read more <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
