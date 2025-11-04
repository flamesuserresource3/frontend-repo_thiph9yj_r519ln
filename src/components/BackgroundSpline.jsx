import Spline from '@splinetool/react-spline';

const BackgroundSpline = () => {
  return (
    <div className="fixed inset-0">
      <Spline
        scene="https://prod.spline.design/9G0eWz8wmv30S19F/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Subtle gradient + vignette overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  );
};

export default BackgroundSpline;
