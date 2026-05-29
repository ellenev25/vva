import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest dark:bg-zinc-950 mt-lg w-full relative z-10 border-t border-surface-container-high dark:border-outline/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-sm gap-md">
        <div className="text-center md:text-left">
          <p className="font-body-md text-body-md text-secondary dark:text-secondary-fixed-dim">© 2026 Velen V. Adrias. Crafted with joy.</p>
        </div>
        <ul className="flex gap-md items-center justify-center flex-wrap">
          <li>
            <Link to="/" className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform block">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform block">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-primary-fixed-dim transition-colors hover:scale-105 transition-transform block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

