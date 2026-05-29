import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Toasts state
  const [toasts, setToasts] = useState([]);

  // Sync theme to root html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      showToast(
        next === 'dark' ? "Switched to Dark Mode 🌙" : "Switched to Light Mode ☀️",
        "info"
      );
      return next;
    });
  };

  // Toast notifier
  const showToast = (message, type = 'success') => {
    const id = Date.now() + Math.random().toString();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3300);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-background dark:bg-inverse-surface text-on-background dark:text-inverse-on-surface min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300">
        {/* Background Digital Grid */}
        <div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>

        {/* Large Decorative Floating Pastel Blobs */}
        <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-primary-fixed/35 dark:bg-on-primary-fixed-variant/15 blur-[130px] pointer-events-none z-0 animate-drift-1"></div>
        <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary-fixed/40 dark:bg-on-secondary-fixed-variant/15 blur-[140px] pointer-events-none z-0 animate-drift-2"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[480px] h-[480px] rounded-full bg-tertiary-fixed/35 dark:bg-on-tertiary-fixed-variant/15 blur-[120px] pointer-events-none z-0 animate-drift-3"></div>

        <div className="relative z-10 flex flex-col flex-grow min-h-screen">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          
          <div className="pt-24 md:pt-32 flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home showToast={showToast} />} />
              <Route path="/about" element={<About showToast={showToast} />} />
              <Route path="/projects" element={<Projects showToast={showToast} />} />
              <Route path="/contact" element={<Contact showToast={showToast} />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          
          <Footer />
        </div>

        {/* Toast Container */}
        <div id="toast-container" className="fixed bottom-5 right-5 z-[100] flex flex-col gap-sm pointer-events-none">
          {toasts.map(t => (
            <Toast key={t.id} message={t.message} type={t.type} />
          ))}
        </div>
      </div>
    </Router>
  );
}
