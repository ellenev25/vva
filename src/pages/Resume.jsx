import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Resume() {
  const navigate = useNavigate();

  return (
    <main className="flex-grow w-full py-lg relative z-10">
      <div className="mx-auto px-margin-mobile md:px-margin-desktop max-w-5xl">
        {/* Header Navigation & Download Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-md mb-lg">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 bg-surface-container dark:bg-zinc-800 text-on-surface dark:text-inverse-on-surface font-label-md text-label-md px-lg py-md rounded-full hover:bg-primary dark:hover:bg-primary-container hover:text-on-primary dark:hover:text-on-primary-container transition-all duration-300 shadow-sm font-bold uppercase tracking-wider bubbly-press"
          >
            <span className="material-symbols-outlined text-[1.2em] font-bold">arrow_back</span>
            <span>Back to Portfolio</span>
          </button>
          
          <div className="text-center sm:text-left">
            <h1 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface font-black uppercase tracking-wider">
              Curriculum Vitae
            </h1>
          </div>

          <a 
            href="/resume/VELEN ADRIAS - RESUME.pdf" 
            download="VELEN_ADRIAS_RESUME.pdf"
            className="inline-flex items-center gap-2 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-label-md text-label-md px-lg py-md rounded-full hover:scale-105 transition-transform duration-300 shadow-sm font-bold uppercase tracking-wider bubbly-button"
          >
            <span className="material-symbols-outlined text-[1.2em] font-bold">download</span>
            <span>Download PDF</span>
          </a>
        </div>

        {/* PDF Viewer Container */}
        <div className="w-full bg-surface-container-low dark:bg-zinc-900 border-4 border-surface dark:border-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl h-[75vh] md:h-[80vh] relative">
          <iframe 
            src="/resume/VELEN ADRIAS - RESUME.pdf#toolbar=1" 
            title="Velen V. Adrias Resume" 
            className="w-full h-full border-none"
          >
            <div className="p-lg text-center space-y-md">
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant">
                It looks like your browser doesn't support embedding PDF files. No worries, you can download or view it directly:
              </p>
              <a 
                href="/resume/VELEN ADRIAS - RESUME.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-primary text-on-primary px-lg py-md rounded-full font-label-md"
              >
                View Resume in New Tab
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </main>
  );
}
