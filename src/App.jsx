import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundSpline from './components/BackgroundSpline';
import Pages from './components/Pages';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900">
        {/* Interactive 3D background present on all pages */}
        <BackgroundSpline sceneUrl="https://prod.spline.design/6v0n7VQb1lQ7Jb2G/scene.splinecode" />
        <Navbar />
        <main className="relative z-10">
          <Pages />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
