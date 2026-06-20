import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStyle = "bg-primary/10 text-primary dark:bg-primary-fixed-dim/15 dark:text-primary-fixed-dim px-gutter py-[6px] rounded-full font-bold transition-all duration-300 block";
  const inactiveStyle = "text-on-surface-variant dark:text-outline-variant font-medium hover:bg-surface-container-high/40 dark:hover:bg-zinc-800/40 px-gutter py-[6px] rounded-full hover:text-primary dark:hover:text-primary-fixed-dim transition-all duration-300 block";

  const activeMobileStyle = "mobile-nav-link bg-primary/10 text-primary dark:bg-primary-fixed-dim/15 dark:text-primary-fixed-dim px-4 py-2 rounded-xl font-bold transition-all duration-300 block";
  const inactiveMobileStyle = "mobile-nav-link text-on-surface-variant dark:text-outline-variant font-medium hover:bg-surface-container/40 dark:hover:bg-zinc-800/40 px-4 py-2 rounded-xl hover:text-primary transition-all duration-300 block";

  return (
    <>
      <nav className={`bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl flex justify-between items-center transition-all duration-500 ease-in-out z-50 fixed left-1/2 -translate-x-1/2 ${
        isScrolled 
          ? 'top-0 w-full max-w-full rounded-none border-b border-outline-variant/10 dark:border-white/5 px-margin-mobile md:px-margin-desktop py-[16px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.3)]' 
          : 'top-4 w-[calc(100%-2*16px)] md:w-[calc(100%-2*64px)] max-w-6xl rounded-full border border-white/80 dark:border-white/5 px-gutter py-[20px] shadow-[0_8px_32px_rgba(135,79,76,0.06)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)]'
      }`}>
        <Link to="/" className="font-headline-md text-primary dark:text-primary-fixed-dim font-extrabold tracking-tight">
          Velen V. Adrias
        </Link>
        
        <ul className="hidden md:flex items-center gap-gutter">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
        
        <div className="hidden md:flex items-center gap-md">
          {/* Light/Dark Mode Switcher */}
          <button 
            onClick={toggleTheme} 
            className="p-xs hover:bg-surface-container dark:hover:bg-zinc-800 rounded-full transition-colors duration-200 flex items-center justify-center text-on-surface-variant dark:text-outline-variant"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <span className="material-symbols-outlined">light_mode</span>
            ) : (
              <span className="material-symbols-outlined">dark_mode</span>
            )}
          </button>
          <Link to="/resume" className="bubbly-button bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-label-md text-label-md px-gutter py-sm rounded-full hover:scale-105 transition-transform duration-300 active:scale-95 transition-all duration-200 block">
            View CV
          </Link>
        </div>
        
        {/* Mobile header buttons */}
        <div className="md:hidden flex items-center gap-sm">
          <button 
            onClick={toggleTheme} 
            className="p-xs hover:bg-surface-container dark:hover:bg-zinc-800 rounded-full transition-colors duration-200 flex items-center justify-center text-on-surface-variant dark:text-outline-variant"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <span className="material-symbols-outlined">light_mode</span>
            ) : (
              <span className="material-symbols-outlined">dark_mode</span>
            )}
          </button>
          <button 
            onClick={() => setDrawerOpen(true)} 
            className="text-primary dark:text-primary-fixed-dim p-xs hover:bg-surface-variant dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop overlay */}
        <div 
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl transition-opacity duration-500 ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        
        {/* Drawer content (fullscreen and centered) */}
        <div className={`absolute inset-0 flex flex-col justify-between p-lg transition-all duration-500 transform ${drawerOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
          {/* Top Bar */}
          <div className="flex justify-between items-center w-full">
            <Link 
              to="/" 
              onClick={() => setDrawerOpen(false)} 
              className="font-headline-md text-primary dark:text-primary-fixed-dim font-extrabold tracking-tight text-xl"
            >
              Velen V. Adrias
            </Link>
            <button 
              onClick={() => setDrawerOpen(false)} 
              className="w-12 h-12 bg-primary/10 dark:bg-primary-fixed-dim/10 text-primary dark:text-primary-fixed-dim rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200"
              aria-label="Close Menu"
            >
              <span className="material-symbols-outlined text-2xl font-bold">close</span>
            </button>
          </div>
          
          {/* Centered Navigation Links */}
          <div className="flex-grow flex items-center justify-center">
            <ul className="flex flex-col gap-lg text-center uppercase tracking-wider">
              <li>
                <NavLink 
                  to="/" 
                  onClick={() => setDrawerOpen(false)} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary dark:text-primary-fixed-dim font-black text-4xl block py-sm" 
                      : "text-on-surface-variant/70 dark:text-outline-variant/70 hover:text-primary dark:hover:text-primary-fixed-dim font-extrabold text-4xl block py-sm transition-colors duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  onClick={() => setDrawerOpen(false)} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary dark:text-primary-fixed-dim font-black text-4xl block py-sm" 
                      : "text-on-surface-variant/70 dark:text-outline-variant/70 hover:text-primary dark:hover:text-primary-fixed-dim font-extrabold text-4xl block py-sm transition-colors duration-300"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  onClick={() => setDrawerOpen(false)} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary dark:text-primary-fixed-dim font-black text-4xl block py-sm" 
                      : "text-on-surface-variant/70 dark:text-outline-variant/70 hover:text-primary dark:hover:text-primary-fixed-dim font-extrabold text-4xl block py-sm transition-colors duration-300"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  onClick={() => setDrawerOpen(false)} 
                  className={({ isActive }) => 
                    isActive 
                      ? "text-primary dark:text-primary-fixed-dim font-black text-4xl block py-sm" 
                      : "text-on-surface-variant/70 dark:text-outline-variant/70 hover:text-primary dark:hover:text-primary-fixed-dim font-extrabold text-4xl block py-sm transition-colors duration-300"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          {/* Centered View CV Button at the Bottom */}
          <div className="w-full flex justify-center pb-xl">
            <Link 
              to="/resume" 
              onClick={() => setDrawerOpen(false)} 
              className="bubbly-button bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container px-12 py-md rounded-full font-headline-md text-lg text-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-sm"
            >
              <span className="material-symbols-outlined">description</span>
              <span>View CV</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
