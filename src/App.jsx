import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundSpline from './components/BackgroundSpline';
import Pages from './components/Pages';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white bg-black overflow-x-hidden">
        {/* 3D background lives at the root so it persists across pages */}
        <BackgroundSpline />

        {/* Foreground content */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Pages />
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
