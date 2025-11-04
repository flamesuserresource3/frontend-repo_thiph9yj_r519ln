import { motion } from 'framer-motion';

function FloatingCube({ colorFrom, colorTo, size = 160, x = '10%', y = '20%', delay = 0 }) {
  const face = (transform) => (
    <div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
        opacity: 0.9,
        borderRadius: 12,
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        transform,
      }}
    />
  );

  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, width: size, height: size, transformStyle: 'preserve-3d' }}
      animate={{ rotateY: [0, 360], rotateX: [10, 370] }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear', delay }}
    >
      {face('translateZ(' + size / 2 + 'px)')}
      {face('rotateY(180deg) translateZ(' + size / 2 + 'px)')}
      {face('rotateY(90deg) translateZ(' + size / 2 + 'px)')}
      {face('rotateY(-90deg) translateZ(' + size / 2 + 'px)')}
      {face('rotateX(90deg) translateZ(' + size / 2 + 'px)')}
      {face('rotateX(-90deg) translateZ(' + size / 2 + 'px)')}
    </motion.div>
  );
}

function DataRing({ color = 'rgba(16,185,129,0.35)', size = 260, x = '70%', y = '60%', delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full border pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        borderColor: color,
        borderWidth: 6,
        boxShadow: `0 0 60px ${color}`,
      }}
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 40, ease: 'linear', delay }}
    />
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0" style={{ perspective: 1000 }}>
        <FloatingCube colorFrom="#34d399" colorTo="#10b981" size={150} x="8%" y="18%" />
        <FloatingCube colorFrom="#22c55e" colorTo="#16a34a" size={120} x="28%" y="70%" delay={4} />
        <FloatingCube colorFrom="#06b6d4" colorTo="#4f46e5" size={180} x="78%" y="22%" delay={2} />
        <DataRing color="rgba(16,185,129,0.35)" size={300} x="65%" y="55%" />
        <DataRing color="rgba(99,102,241,0.35)" size={220} x="20%" y="35%" delay={6} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 via-white/20 to-white/60 pointer-events-none" />
    </div>
  );
}
