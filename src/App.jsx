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

        {/* Global Background */}
        <div className="fixed inset-0 z-0 pointer-events-none bg-dark-950">
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
