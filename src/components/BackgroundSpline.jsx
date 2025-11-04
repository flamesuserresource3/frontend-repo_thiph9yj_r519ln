import Spline from '@splinetool/react-spline';

export default function BackgroundSpline({ sceneUrl }) {
  return (
    <div className="fixed inset-0" aria-hidden>
      <Spline scene={sceneUrl} style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/40 via-white/20 to-white/60" />
    </div>
  );
}
