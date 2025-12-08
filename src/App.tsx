import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';

// Lazy load routes for code splitting
const Home = lazy(() => import('./pages/Home'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ThoughtsPage = lazy(() => import('./pages/ThoughtsPage'));

// Lightweight loading spinner
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="app min-h-screen bg-background text-foreground">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/thoughts" element={<ThoughtsPage />} />
            <Route path="/thoughts/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
