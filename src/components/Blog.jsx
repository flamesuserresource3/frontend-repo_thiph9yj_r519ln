const posts = [
  {
    id: 1,
    title: 'Getting Started with Data Science at VIT Bhopal',
    excerpt: 'A roadmap for students to dive into ML, DL, and data engineering with campus resources.',
    tags: ['Beginner', 'Community'],
    link: '#',
  },
  {
    id: 2,
    title: 'From EDA to Insights: A Mini Case Study',
    excerpt: 'We walk through a small dataset and uncover actionable insights step by step.',
    tags: ['EDA', 'Python'],
    link: '#',
  },
  {
    id: 3,
    title: 'Prompt Engineering Tips for Better LLM Results',
    excerpt: 'Simple techniques to get higher-quality outputs while building AI apps.',
    tags: ['LLMs', 'Product'],
    link: '#',
  },
];

const Blog = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold">From the Blog</h2>
      <p className="mt-2 text-white/70">Stories, guides, and learnings from our members and mentors.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20"
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="mt-4 inline-block rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
            >
              Read more
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
