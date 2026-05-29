import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData, designGallery } from '../data/projectsData';
import Typewriter from '../components/Typewriter';

export default function Home({ showToast }) {
  // Modal states
  const [activeProject, setActiveProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Top 3 projects to showcase
  const topProjects = [
    projectsData.grocery,
    projectsData.brainboost,
    projectsData['python-bank']
  ];

  // Lightbox navigation
  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    let nextIndex = lightboxIndex + direction;
    if (nextIndex < 0) {
      nextIndex = designGallery.length - 1;
    } else if (nextIndex >= designGallery.length) {
      nextIndex = 0;
    }
    setLightboxIndex(nextIndex);
  };

  // Keyboard controls for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') navigateLightbox(1);
        else if (e.key === 'ArrowLeft') navigateLightbox(-1);
        else if (e.key === 'Escape') setLightboxIndex(null);
      }
      if (activeProject !== null) {
        if (e.key === 'Escape') setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeProject]);

  return (
    <main className="flex-grow w-full mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-lg z-10 max-w-6xl">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-md min-h-[440px] relative">
        <div className="inline-block px-sm py-xs bg-secondary-fixed/50 dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-full font-caption text-caption mb-md shadow-sm border border-secondary-fixed/20 animate-bounce" style={{ animationDuration: '4s' }}>
          <span className="material-symbols-outlined align-middle text-[16px] mr-1 text-secondary dark:text-secondary-fixed-dim">auto_awesome</span>
          <span className="text-secondary dark:text-secondary-fixed-dim font-bold uppercase tracking-wider">Welcome to my creative space</span>
        </div>
        <h1 className="font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight max-w-3xl leading-tight mb-md">
          I am <span className="gradient-text-pastel font-black">Velen Adrias</span>
        </h1>
        <div className="font-headline-md md:text-2xl text-secondary dark:text-secondary-fixed-dim mb-md flex items-center justify-center gap-1 font-bold tracking-tight bg-secondary-fixed/25 dark:bg-on-secondary-fixed-variant/40 px-gutter py-2 rounded-full border border-secondary-fixed/40 dark:border-on-secondary-fixed-variant/30 shadow-[0_4px_15px_rgba(53,101,114,0.05)] dark:shadow-none">
          <span className="text-secondary/50 dark:text-secondary-fixed-dim/50 font-extrabold">&lt;</span>
          <Typewriter />
          <span className="text-secondary/50 dark:text-secondary-fixed-dim/50 font-extrabold">/&gt;</span>
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant max-w-2xl mb-lg">
          A fourth-year BSIT student with experience in frontend development, UI/UX design, software testing, software project management, and Python-based development.
        </p>
        <div className="flex flex-wrap justify-center gap-md">
          <Link 
            to="/projects" 
            className="bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container px-lg py-md rounded-full font-label-md text-label-md bubbly-btn hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <span>View My Work</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link 
            to="/contact" 
            className="bg-surface-container dark:bg-surface text-on-surface px-lg py-md rounded-full font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-300 flex items-center gap-2 border border-outline-variant dark:border-outline shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined">waving_hand</span>
            <span>Say Hello</span>
          </Link>
        </div>

        {/* Quick Stats Highlight Bar */}
        <div className="mt-lg w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-md">
          <div className="pastel-glass-blue border border-white/40 dark:border-white/10 p-md rounded-2xl flex items-center justify-center gap-sm shadow-sm hover:scale-[1.02] transition-all duration-300 select-none">
            <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim text-3xl">folder_open</span>
            <div className="text-left">
              <div className="text-headline-md font-extrabold text-on-surface dark:text-inverse-on-surface leading-none mb-[2px]">11+</div>
              <div className="text-caption font-bold text-on-surface-variant dark:text-outline-variant uppercase tracking-wider text-[10px]">Projects Completed</div>
            </div>
          </div>
          <div className="pastel-glass-pink border border-white/40 dark:border-white/10 p-md rounded-2xl flex items-center justify-center gap-sm shadow-sm hover:scale-[1.02] transition-all duration-300 select-none">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-3xl">verified</span>
            <div className="text-left">
              <div className="text-headline-md font-extrabold text-on-surface dark:text-inverse-on-surface leading-none mb-[2px]">4</div>
              <div className="text-caption font-bold text-on-surface-variant dark:text-outline-variant uppercase tracking-wider text-[10px]">Cisco Credentials</div>
            </div>
          </div>
          <div className="pastel-glass-purple border border-white/40 dark:border-white/10 p-md rounded-2xl flex items-center justify-center gap-sm shadow-sm hover:scale-[1.02] transition-all duration-300 select-none">
            <span className="material-symbols-outlined text-tertiary dark:text-tertiary-fixed text-3xl">auto_awesome</span>
            <div className="text-left">
              <div className="text-headline-md font-extrabold text-on-surface dark:text-inverse-on-surface leading-none mb-[2px]">3+</div>
              <div className="text-caption font-bold text-on-surface-variant dark:text-outline-variant uppercase tracking-wider text-[10px]">Dev & Design Roles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Reel & Design Showcase Section */}
      <section className="w-full relative group flex flex-col md:flex-row items-center gap-lg py-xs">
        <div className="w-full md:w-1/4 flex flex-col items-start text-left z-10">
          <div className="flex items-center mb-sm">
            <h2 className="text-secondary dark:text-secondary-fixed-dim tracking-widest uppercase font-headline-lg text-headline-lg font-extrabold">Demo Reel</h2>
          </div>
          <p className="font-body-md text-on-surface-variant dark:text-outline-variant">
            A curated showcase of design compilations, brand concepts, and digital creations. Play the video to view the demo reel.
          </p>
        </div>
        <div className="w-full md:w-3/4 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-fixed via-tertiary-fixed to-secondary-fixed rounded-[4rem] opacity-50 dark:opacity-20 blur-lg group-hover:opacity-70 transition-opacity duration-500 -z-10"></div>
          <div className="w-full aspect-video bg-surface-container-lowest dark:bg-surface-container rounded-xl md:rounded-[3rem] overflow-hidden shadow-[0_8px_32px_rgba(135,79,76,0.1)] relative border-4 border-surface dark:border-surface-variant flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
            <video 
              src="/demoreel/demo_reel.mp4" 
              controls 
              className="w-full h-full object-cover rounded-xl md:rounded-[2.8rem]" 
              poster="/images/photoshop/bluesakura.jpg"
            />
          </div>
        </div>
      </section>

      {/* Toolkit / Skills Section */}
      <section className="py-xs">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-surface-container-low to-surface-container dark:from-inverse-surface dark:to-inverse-surface/90 rounded-[3rem] p-lg md:p-xl shadow-[0_20px_50px_rgba(135,79,76,0.05)] border border-white/50 dark:border-white/5 relative overflow-hidden">
          {/* Internal decorative mesh inside toolkit card */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-tertiary-fixed/30 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="text-center mb-xl relative z-10">
            <div className="inline-block px-6 py-2 bg-primary-fixed/40 dark:bg-on-primary-fixed-variant/50 text-primary dark:text-primary-fixed-dim font-bold rounded-full mb-4 tracking-widest uppercase text-headline-md leading-tight border border-primary-fixed/20">
              What I Use
            </div>
            <h2 className="font-headline-xl text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight mb-4">My Toolkit</h2>
            <p className="font-body-lg text-on-surface-variant dark:text-outline-variant max-w-2xl mx-auto">
              The tools and technologies I use to bring coding and design ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg relative z-10">
            {/* Tech Stack Card */}
            <div className="glass-card glow-card rounded-xl p-lg flex flex-col items-center border-2 border-white/80 dark:border-white/5">
              <h3 className="font-headline-md text-primary dark:text-primary-fixed-dim font-extrabold tracking-tight mb-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim">terminal</span> Tech Stack
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-gutter w-full">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100/60 dark:bg-blue-900/20 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-mysql-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">MySQL</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-indigo-100/60 dark:bg-indigo-900/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-200/80 dark:group-hover:bg-indigo-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-php-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">PHP</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100/60 dark:bg-red-900/20 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-red-200/80 dark:group-hover:bg-red-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-java-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Java</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-100/60 dark:bg-purple-900/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-200/80 dark:group-hover:bg-purple-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-csharp-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">C#</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-100/60 dark:bg-sky-900/20 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-sky-200/80 dark:group-hover:bg-sky-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-python-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Python</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-100/60 dark:bg-orange-900/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-orange-200/80 dark:group-hover:bg-orange-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-html5-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">HTML5</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100/60 dark:bg-blue-900/20 rounded-2xl group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-css3-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">CSS3</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-100/60 dark:bg-amber-900/20 rounded-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-200/80 dark:group-hover:bg-amber-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-javascript-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">JS</span>
                </div>
              </div>
            </div>
            
            {/* Creative Tools Card */}
            <div className="glass-card glow-card rounded-xl p-lg flex flex-col items-center border-2 border-white/80 dark:border-white/5">
              <h3 className="font-headline-md text-secondary dark:text-secondary-fixed-dim font-extrabold tracking-tight mb-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim">palette</span> Creative Tools
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-gutter w-full">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-100/60 dark:bg-orange-900/20 rounded-full group-hover:scale-110 group-hover:rotate-12 group-hover:bg-orange-200/80 dark:group-hover:bg-orange-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-figma-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Figma</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-amber-100/60 dark:bg-amber-900/20 rounded-full group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-amber-200/80 dark:group-hover:bg-amber-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-illustrator-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Ai</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100/60 dark:bg-blue-900/20 rounded-full group-hover:scale-110 group-hover:rotate-12 group-hover:bg-blue-200/80 dark:group-hover:bg-blue-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-photoshop-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Ps</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-cyan-100/60 dark:bg-cyan-900/20 rounded-full group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-cyan-200/80 dark:group-hover:bg-cyan-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-canva-original colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Canva</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-green-100/60 dark:bg-green-900/20 rounded-full group-hover:scale-110 group-hover:rotate-12 group-hover:bg-green-200/80 dark:group-hover:bg-green-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-500">table_chart</span>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Sheets</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-100/60 dark:bg-sky-900/20 rounded-full group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-sky-200/80 dark:group-hover:bg-sky-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <span className="material-symbols-outlined text-4xl text-blue-600 dark:text-blue-400">description</span>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Word</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-100/60 dark:bg-red-900/20 rounded-full group-hover:scale-110 group-hover:rotate-12 group-hover:bg-red-200/80 dark:group-hover:bg-red-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <span className="material-symbols-outlined text-4xl text-red-600 dark:text-red-400">slideshow</span>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">PPT</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-16 h-16 flex items-center justify-center bg-indigo-100/60 dark:bg-indigo-900/20 rounded-full group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-indigo-200/80 dark:group-hover:bg-indigo-900/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm">
                    <i className="devicon-jira-plain colored text-4xl"></i>
                  </div>
                  <span className="text-caption font-bold uppercase tracking-tighter text-on-surface/85 dark:text-inverse-on-surface/85">Jira</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Projects Section */}
      <section className="py-xs">
        <div className="text-center mb-lg">
          <div className="inline-block px-4 py-1 bg-tertiary-fixed dark:bg-on-tertiary-fixed-variant/50 text-on-tertiary-fixed-variant dark:text-tertiary-fixed rounded-full font-label-md mb-4 uppercase">
            Portfolio
          </div>
          <h2 className="font-headline-xl text-on-surface dark:text-inverse-on-surface font-extrabold tracking-tight mb-sm">Recent Projects</h2>
          <p className="font-body-md text-on-surface-variant dark:text-outline-variant max-w-xl mx-auto">
            A selection of my desktop application developments and digital design showcase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {topProjects.map(project => (
            <div key={project.id} className="glass-card glow-card rounded-[2rem] p-md flex flex-col group">
              <div className={`w-full aspect-[4/3] rounded-[1.5rem] mb-md overflow-hidden relative border border-outline-variant/10 flex items-center justify-center ${
                project.category === 'mobile' ? 'pastel-glass-pink' :
                project.category === 'systems' ? 'pastel-glass-purple' :
                project.category === 'website' ? 'pastel-glass-blue' :
                project.category === 'game' ? 'pastel-glass-green' : 'pastel-glass-pink'
              }`}>
                {project.img ? (
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={project.img} 
                  />
                ) : (
                  project.id === 'grocery' ? (
                    <span className="material-symbols-outlined text-[72px] text-tertiary/60 dark:text-tertiary-fixed/40 select-none group-hover:scale-110 transition-transform duration-300">shopping_cart</span>
                  ) : project.id === 'brainboost' ? (
                    <span className="material-symbols-outlined text-[72px] text-primary/60 dark:text-primary-fixed-dim/40 select-none group-hover:scale-110 transition-transform duration-300">psychology</span>
                  ) : (
                    <span className="material-symbols-outlined text-[72px] text-secondary/60 dark:text-secondary-fixed-dim/40 select-none group-hover:scale-110 transition-transform duration-300">account_balance</span>
                  )
                )}
              </div>
              <h3 className="font-headline-md text-primary dark:text-primary-fixed-dim mb-xs text-xl font-bold">{project.title}</h3>
              <p className="font-body-md text-on-surface-variant dark:text-outline-variant mb-md flex-grow">{project.desc}</p>
              <button 
                onClick={() => { setActiveProject(project); setCurrentImgIndex(0); }}
                className="project-btn text-secondary dark:text-secondary-fixed-dim font-label-md flex items-center gap-1 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors mt-auto text-left"
              >
                <span>View Details</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-lg">
          <Link 
            to="/projects"
            className="bg-surface-container dark:bg-surface text-on-surface px-lg py-md rounded-full font-label-md text-label-md hover:bg-surface-container-high transition-colors duration-300 inline-flex items-center gap-2 border border-outline-variant dark:border-outline shadow-sm hover:shadow-md"
          >
            <span className="material-symbols-outlined text-sm">palette</span>
            <span>View More</span>
          </Link>
        </div>
      </section>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-md opacity-100 transition-all duration-300">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => { setActiveProject(null); setCurrentImgIndex(0); }}></div>
          <div className="relative bg-surface dark:bg-zinc-900 border border-outline-variant/20 rounded-[2.5rem] w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl scale-100 transition-all duration-300 z-10 flex flex-col">
            {/* Absolute Close Button */}
            <button 
              onClick={() => { setActiveProject(null); setCurrentImgIndex(0); }} 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-container/80 dark:bg-zinc-800/80 hover:bg-primary dark:hover:bg-primary-container text-on-surface dark:text-inverse-on-surface hover:text-white dark:hover:text-black transition-all duration-300 flex items-center justify-center shadow-md hover:rotate-90 z-30 backdrop-blur-sm"
            >
              <span className="material-symbols-outlined text-[20px] font-bold">close</span>
            </button>

            {/* Split Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 flex-grow overflow-y-auto md:overflow-hidden">
              {/* Left Column: Contained Banner Image / Fallback Placeholder */}
              <div className="w-full p-md md:p-lg flex flex-col items-center justify-center bg-surface-container-low/50 dark:bg-zinc-900/30 md:h-full md:border-r border-b md:border-b-0 border-outline-variant/10 min-h-[300px] relative select-none">
                {activeProject.images && activeProject.images.length > 0 ? (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    <div className="w-full h-full flex items-center justify-center min-h-[260px] max-h-[320px] md:max-h-[400px]">
                      <img 
                        src={activeProject.images[currentImgIndex]} 
                        alt={`${activeProject.title} screenshot ${currentImgIndex + 1}`} 
                        className="rounded-2xl shadow-lg border border-outline-variant/10 object-contain max-h-[260px] md:max-h-[380px] w-auto h-auto transition-all duration-300" 
                      />
                    </div>
                    
                    {/* Navigation Arrows for Gallery */}
                    {activeProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={() => setCurrentImgIndex(prev => (prev - 1 + activeProject.images.length) % activeProject.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 dark:bg-zinc-800/60 hover:bg-primary dark:hover:bg-primary-container text-white flex items-center justify-center transition-colors shadow-md z-20"
                          aria-label="Previous image"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                        </button>
                        <button 
                          onClick={() => setCurrentImgIndex(prev => (prev + 1) % activeProject.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 dark:bg-zinc-800/60 hover:bg-primary dark:hover:bg-primary-container text-white flex items-center justify-center transition-colors shadow-md z-20"
                          aria-label="Next image"
                        >
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                        
                        {/* Bullet indicators */}
                        <div className="flex gap-1.5 justify-center mt-sm">
                          {activeProject.images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setCurrentImgIndex(i)}
                              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === currentImgIndex ? 'bg-primary dark:bg-primary-fixed-dim w-4' : 'bg-outline-variant/60 hover:bg-outline-variant'}`}
                              aria-label={`Go to slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : activeProject.img ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={activeProject.img} 
                      alt={activeProject.title} 
                      className="rounded-2xl shadow-lg border border-outline-variant/10 object-contain max-h-[300px] md:max-h-[440px] w-auto h-auto transition-transform hover:scale-[1.02] duration-500" 
                    />
                  </div>
                ) : (
                  <div className={`w-4/5 aspect-[4/3] rounded-[2rem] flex items-center justify-center shadow-lg border border-white/20 dark:border-white/5 relative overflow-hidden transition-transform hover:scale-[1.02] duration-500 ${
                    activeProject.id === 'grocery' ? 'pastel-glass-purple' : 
                    activeProject.id === 'brainboost' ? 'pastel-glass-pink' : 
                    activeProject.id === 'zombie-game' ? 'pastel-glass-green' : 
                    'pastel-glass-blue'
                  }`}>
                    {activeProject.id === 'grocery' ? (
                      <span className="material-symbols-outlined text-[96px] text-tertiary/60 dark:text-tertiary-fixed/40 select-none">shopping_cart</span>
                    ) : activeProject.id === 'brainboost' ? (
                      <span className="material-symbols-outlined text-[96px] text-primary/60 dark:text-primary-fixed-dim/40 select-none">psychology</span>
                    ) : activeProject.id === 'zombie-game' ? (
                      <span className="material-symbols-outlined text-[96px] text-green-600/60 dark:text-green-400/40 select-none">sports_esports</span>
                    ) : (
                      <span className="material-symbols-outlined text-[96px] text-secondary/60 dark:text-secondary-fixed-dim/40 select-none">account_balance</span>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Project Details */}
              <div className="p-lg space-y-lg flex flex-col justify-start md:overflow-y-auto md:max-h-[85vh] pr-xl pt-xl relative">
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed-dim rounded-full text-caption font-bold tracking-wider uppercase mb-xs border border-secondary-fixed/20">
                    {activeProject.categoryDisplay}
                  </span>
                  <h3 className="font-headline-xl text-primary dark:text-primary-fixed-dim text-3xl md:text-4xl font-black tracking-tight mt-xs mb-md">
                    {activeProject.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant dark:text-outline-variant leading-relaxed text-[15px]">
                    {activeProject.desc}
                  </p>
                </div>
                
                <div className="space-y-sm">
                  <h4 className="font-headline-md text-on-surface dark:text-inverse-on-surface text-base font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-xl">build</span>
                    Technologies Utilized
                  </h4>
                  <div className="flex flex-wrap gap-xs">
                    {activeProject.techs.map((tech, i) => (
                      <span key={i} className="bg-secondary-fixed/50 dark:bg-on-secondary-fixed-variant/40 text-on-secondary-container dark:text-secondary-fixed-dim px-md py-[6px] rounded-xl text-caption font-bold border border-secondary-fixed/20 shadow-sm hover:scale-[1.03] transition-all duration-200 cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.externalLink && (
                  <div className="pt-sm">
                    <a 
                      href={activeProject.externalLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bubbly-button inline-flex items-center gap-2 bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container px-gutter py-sm rounded-full font-label-md text-label-md hover:scale-105 transition-transform duration-300"
                    >
                      <span className="material-symbols-outlined text-[18px]">public</span>
                      <span>Visit Project Link</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Design Gallery Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-md opacity-100 transition-opacity duration-300 select-none">
          <button 
            onClick={() => setLightboxIndex(null)} 
            className="absolute top-5 right-5 text-white hover:text-primary transition-colors z-[60] bg-black/40 p-xs rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          
          <button 
            onClick={() => navigateLightbox(-1)} 
            className="absolute left-5 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 bg-black/40 p-xs rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-4xl">chevron_left</span>
          </button>
          
          <button 
            onClick={() => navigateLightbox(1)} 
            className="absolute right-5 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50 bg-black/40 p-xs rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-4xl">chevron_right</span>
          </button>

          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center gap-sm relative">
            <img 
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 transition-opacity duration-150" 
              src={designGallery[lightboxIndex].src} 
              alt={designGallery[lightboxIndex].title} 
            />
            <div className="text-white font-caption font-bold text-caption tracking-wider mt-sm bg-black/60 px-md py-xs rounded-full">
              {designGallery[lightboxIndex].title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
