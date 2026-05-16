import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';
import CurriculumPage from './pages/CurriculumPage';
import MentorPage from './pages/MentorPage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ApplyPage from './pages/ApplyPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-950 text-white font-sans selection:bg-primary-500 selection:text-white">
        <Navbar />

        {/* Global Background Particles/Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-950">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-800/20 rounded-full blur-[120px] animate-pulse mix-blend-screen"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary-800/10 rounded-full blur-[120px] animate-pulse delay-1000 mix-blend-screen"></div>
          <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[100px] animate-pulse delay-500 mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/mentor" element={<MentorPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/apply" element={<ApplyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
