const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Data Science Club — VIT Bhopal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/about" className="hover:text-white">About</a>
            <a href="/events" className="hover:text-white">Events</a>
            <a href="/blog" className="hover:text-white">Blog</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
