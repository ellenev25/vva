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

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop overlay */}
        <div 
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
        ></div>
        
        {/* Drawer side content */}
        <div className={`absolute top-0 right-0 h-full w-[280px] bg-surface dark:bg-inverse-surface shadow-2xl p-lg flex flex-col gap-lg transition-transform duration-300 border-l border-outline-variant/15 ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center border-b border-outline-variant/20 pb-sm">
            <span className="font-headline-md text-primary dark:text-primary-fixed-dim font-bold text-lg">Menu</span>
            <button 
              onClick={() => setDrawerOpen(false)} 
              className="p-xs hover:bg-surface-container dark:hover:bg-zinc-800 rounded-full transition-colors flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <ul className="flex flex-col gap-md text-lg">
            <li>
              <NavLink 
                to="/" 
                onClick={() => setDrawerOpen(false)} 
                className={({ isActive }) => isActive ? activeMobileStyle : inactiveMobileStyle}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => setDrawerOpen(false)} 
                className={({ isActive }) => isActive ? activeMobileStyle : inactiveMobileStyle}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={() => setDrawerOpen(false)} 
                className={({ isActive }) => isActive ? activeMobileStyle : inactiveMobileStyle}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => setDrawerOpen(false)} 
                className={({ isActive }) => isActive ? activeMobileStyle : inactiveMobileStyle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          <div className="mt-auto border-t border-outline-variant/20 pt-md">
            <Link 
              to="/resume" 
              onClick={() => setDrawerOpen(false)} 
              className="bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container px-gutter py-sm rounded-full font-label-md text-label-md text-center bubbly-btn active:scale-95 block"
            >
              View CV
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
