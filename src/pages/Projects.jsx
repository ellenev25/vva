import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ showToast }) {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // All 11 projects list
  const allProjects = Object.values(projectsData);

  // Filtered projects
  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  // Filters list
  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'website', label: 'Website' },
    { id: 'systems', label: 'Systems' },
    { id: 'mockups', label: 'Mockups' },
    { id: 'multimedia', label: 'Multimedia' },
    { id: 'game', label: 'Game' }
  ];

  return (
    <main className="flex-grow w-full py-lg relative z-10">
      <div className="mx-auto px-margin-mobile md:px-margin-desktop max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-lg relative py-xs">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary-container/20 to-secondary-container/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="inline-flex items-center gap-2 px-md py-xs rounded-full bg-primary-fixed/50 dark:bg-on-primary-fixed-variant/50 text-on-primary-fixed dark:text-primary-fixed-dim font-label-md text-label-md mb-md animate-bounce uppercase tracking-wider font-bold shadow-sm border border-primary-fixed/20">
            <span className="material-symbols-outlined text-[1.2em]">star_rate</span>
            <span>Featured Portfolio</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl font-extrabold uppercase tracking-tight text-on-surface dark:text-inverse-on-surface mb-sm relative z-10">
            <span className="text-on-surface dark:text-inverse-on-surface font-sans not-italic">my </span>
            <span className="gradient-text-pastel italic">projects</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant max-w-2xl mx-auto relative z-10">
            A collection of my previous works, which includes websites, desktop applications, graphic designs, games, and UI mockups.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-sm mb-lg" id="filter-bar">
          {filterCategories.map(cat => {
            const isActive = filter === cat.id;
            return (
              <button 
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-md py-base rounded-full font-label-md text-label-md font-bold uppercase tracking-wider bubbly-press transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-on-primary shadow-[0_8px_20px_rgba(135,79,76,0.25)] border-t border-white/20' 
                    : 'bg-white/50 dark:bg-zinc-800/40 text-on-surface-variant dark:text-outline-variant hover:bg-primary-container/30 hover:text-on-primary-container dark:hover:bg-zinc-700 border border-white/80 dark:border-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md" id="projects-grid">
          {filteredProjects.map(project => (
            <article 
              key={project.id}
              onClick={() => { setActiveProject(project); setCurrentImgIndex(0); }}
              className="glass-card glow-card rounded-[2.5rem] p-sm border flex flex-col group cursor-pointer"
            >
              <div className={`w-full h-64 rounded-[2rem] overflow-hidden mb-sm relative border border-outline-variant/10 flex items-center justify-center ${
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
                    <span className="material-symbols-outlined text-[72px] text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">shopping_cart</span>
                  ) : project.id === 'brainboost' ? (
                    <span className="material-symbols-outlined text-[72px] text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">psychology</span>
                  ) : project.id === 'zombie-game' ? (
                    <span className="material-symbols-outlined text-[72px] text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">sports_esports</span>
                  ) : (
                    <span className="material-symbols-outlined text-[72px] text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300">account_balance</span>
                  )
                )}
              </div>
              <div className="px-sm pb-sm flex-grow flex flex-col">
                <div className="flex flex-wrap gap-xs mb-xs mt-xs">
                  <span className="bg-primary-fixed/60 dark:bg-on-primary-fixed-variant/50 text-on-primary-fixed dark:text-primary-fixed-dim font-caption text-caption font-bold uppercase tracking-wider px-sm py-xs rounded-full border border-primary-fixed/20">
                    {project.category}
                  </span>
                  {project.techs.slice(0, 1).map((tech, i) => (
                    <span key={i} className="bg-secondary-fixed/60 dark:bg-on-secondary-fixed-variant/50 text-on-secondary-fixed dark:text-secondary-fixed-dim font-caption text-caption font-bold uppercase tracking-wider px-sm py-xs rounded-full border border-secondary-fixed/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-headline-md text-headline-md font-bold uppercase tracking-wider text-on-surface dark:text-inverse-on-surface mt-xs mb-xs group-hover:text-primary dark:group-hover:text-primary-fixed-dim transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant line-clamp-2">
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>


      </div>

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
                    activeProject.category === 'mobile' ? 'pastel-glass-pink' :
                    activeProject.category === 'systems' ? 'pastel-glass-purple' :
                    activeProject.category === 'website' ? 'pastel-glass-blue' :
                    activeProject.category === 'game' ? 'pastel-glass-green' : 'pastel-glass-pink'
                  }`}>
                    {activeProject.id === 'grocery' ? (
                      <span className="material-symbols-outlined text-[96px] text-teal-600 dark:text-teal-400 select-none">shopping_cart</span>
                    ) : activeProject.id === 'brainboost' ? (
                      <span className="material-symbols-outlined text-[96px] text-purple-600 dark:text-purple-400 select-none">psychology</span>
                    ) : activeProject.id === 'zombie-game' ? (
                      <span className="material-symbols-outlined text-[96px] text-green-600 dark:text-green-400 select-none">sports_esports</span>
                    ) : (
                      <span className="material-symbols-outlined text-[96px] text-orange-600 dark:text-orange-400 select-none">account_balance</span>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Project Details */}
              <div className="p-lg space-y-lg flex flex-col justify-start md:overflow-y-auto md:max-h-[85vh] pr-md md:pr-xl pt-md md:pt-xl relative">
                <div>
                  <span className="inline-block px-3 py-1 bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed-dim rounded-full text-caption font-bold tracking-wider uppercase mb-xs border border-secondary-fixed/20">
                    {activeProject.categoryDisplay || activeProject.category}
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
    </main>
  );
}
