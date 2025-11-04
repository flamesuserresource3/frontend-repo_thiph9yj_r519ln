import { motion } from 'framer-motion';

const Floating = ({ delay = 0, children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -10, 0], opacity: 1 }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

const Cube = ({ className = '' }) => (
  <div className={`w-16 h-16 rotate-12 bg-gradient-to-br from-cyan-400/70 to-fuchsia-500/70 backdrop-blur-sm rounded-md shadow-lg shadow-fuchsia-500/10 ${className}`} />
);

const Ring = ({ className = '' }) => (
  <div className={`w-32 h-32 border-2 border-cyan-400/50 rounded-full blur-[0.5px] ${className}`} />
);

const Background3D = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[1]">{/* keep behind hero text but above Spline */}
      <div className="absolute left-10 top-20">
        <Floating>
          <Cube />
        </Floating>
      </div>
      <div className="absolute right-16 top-10">
        <Floating delay={1.2}>
          <Ring />
        </Floating>
      </div>
      <div className="absolute right-24 bottom-20">
        <Floating delay={0.6}>
          <Cube className="w-10 h-10 rotate-45 from-sky-400/70 to-violet-500/70" />
        </Floating>
      </div>
    </div>
  );
};

export default Background3D;
