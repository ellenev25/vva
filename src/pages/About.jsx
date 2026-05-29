import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const techStack = [
  { name: "MySQL", icon: "devicon-mysql-plain colored text-3xl" },
  { name: "PHP", icon: "devicon-php-plain colored text-3xl" },
  { name: "Java", icon: "devicon-java-plain colored text-3xl" },
  { name: "C#", icon: "devicon-csharp-plain colored text-3xl" },
  { name: "Python", icon: "devicon-python-plain colored text-3xl" },
  { name: "HTML5", icon: "devicon-html5-plain colored text-3xl" },
  { name: "CSS3", icon: "devicon-css3-plain colored text-3xl" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored text-3xl" },
  { name: "React", icon: "devicon-react-original colored text-3xl" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored text-3xl" },
  { name: "Git", icon: "devicon-git-plain colored text-3xl" },
  { name: "GitHub", icon: "devicon-github-original text-3xl dark:text-white" }
];

const creativeTools = [
  { name: "Figma", icon: "devicon-figma-plain colored text-3xl" },
  { name: "Illustrator", icon: "devicon-illustrator-plain colored text-3xl" },
  { name: "Photoshop", icon: "devicon-photoshop-plain colored text-3xl" },
  { name: "Canva", icon: "devicon-canva-original colored text-3xl" },
  { name: "Jira", icon: "devicon-jira-plain colored text-3xl" },
  { name: "Sheets", icon: "material-symbols-outlined text-green-600 dark:text-green-400 text-3xl", isMaterial: true, symbol: "table_chart" },
  { name: "MS Word", icon: "material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl", isMaterial: true, symbol: "description" },
  { name: "PPT", icon: "material-symbols-outlined text-red-600 dark:text-red-400 text-3xl", isMaterial: true, symbol: "slideshow" }
];

export default function About({ showToast }) {
  const [certLightbox, setCertLightbox] = useState(null);

  const certificates = [
    {
      title: "Networking Basics",
      img: "/certificates/cisco_certificates/Networking Basics.jpg",
      provider: "Cisco Academy"
    },
    {
      title: "Network Addressing and Basic",
      img: "/certificates/cisco_certificates/Network Addressing and Basic.jpg",
      provider: "Cisco Academy"
    },
    {
      title: "Networking Devices and Initial Configuration",
      img: "/certificates/cisco_certificates/Networking Devices and Initial Configuration.jpg",
      provider: "Cisco Academy"
    },
    {
      title: "Network Support and Security",
      img: "/certificates/cisco_certificates/Network Support and Security.jpg",
      provider: "Cisco Academy"
    }
  ];

  const handlePrint = () => {
    showToast("Generating snapshot resume...", "success");
    setTimeout(() => {
      window.print();
    }, 1000);
  };

  return (
    <main className="mx-auto px-margin-mobile md:px-margin-desktop py-lg space-y-xl max-w-6xl z-10 relative">
      {/* Introduction Section */}
      <section className="flex flex-col md:flex-row items-center gap-lg py-md">
        <div className="w-full md:w-1/2 space-y-md">
          <div className="inline-flex items-center gap-xs bg-primary-fixed dark:bg-on-primary-fixed-variant/50 px-sm py-xs rounded-full">
            <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>waving_hand</span>
            <span className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim uppercase tracking-wider">HELLO THERE!</span>
          </div>
          <h1 className="font-headline-xl text-[40px] md:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-md">
            <span className="text-on-surface dark:text-inverse-on-surface">GET TO KNOW</span><br />
            <span className="gradient-text-pastel font-black">ME MORE</span>
          </h1>
          <div className="space-y-sm font-body-md text-[16px] text-on-surface-variant dark:text-outline-variant leading-relaxed">
            <p>
              I am a fourth-year Bachelor of Science in Information Technology student with experience in frontend development, UI/UX design, software testing, and Python-based development. I have developed academic and personal projects such as scheduling systems, tracking systems, survey systems, and a visitor prediction model. These projects helped me improve my problem-solving, system development, and collaboration skills while working in both individual and team environments.
            </p>
          </div>
          <div className="flex gap-sm pt-md">
            <Link
              to="/resume"
              className="bubbly-button bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-label-md text-label-md px-gutter py-sm rounded-full hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center"
            >
              View Resume
            </Link>
            <a
              href="#services"
              className="bg-surface-container dark:bg-zinc-800 text-on-surface dark:text-inverse-on-surface font-label-md text-label-md px-gutter py-sm rounded-full border border-outline-variant/30 hover:bg-surface-container-highest dark:hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center"
            >
              More About Me
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square bg-secondary-fixed dark:bg-on-secondary-fixed-variant rounded-xl overflow-hidden bubbly-shadow relative p-sm">
            <img
              alt="A whimsical workspace portrait"
              className="w-full h-full object-cover rounded-lg border-4 border-surface dark:border-inverse-surface"
              src="/images/New folder/pic_1.jpg"
            />
            {/* Decorative Floating Element */}
            <div className="absolute -bottom-md -left-md bg-surface dark:bg-inverse-surface p-sm rounded-full bubbly-shadow animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="space-y-lg py-md">
        <div className="text-center space-y-xs">
          <h2 className="font-headline-lg text-headline-lg gradient-text-pastel uppercase tracking-tight font-extrabold">What I Offer</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Turning ideas into bubbly realities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Service 1 */}
          <div className="pastel-glass-pink glow-card p-lg rounded-[2rem] flex flex-col items-center text-center gap-sm transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-primary-fixed/60 dark:bg-on-primary-fixed-variant/40 flex items-center justify-center text-primary dark:text-primary-fixed-dim mb-xs shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim font-bold">Web Dev</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Building squishy, responsive, and delightful front-ends that users love to interact with.</p>
          </div>
          {/* Service 2 */}
          <div className="pastel-glass-blue glow-card p-lg rounded-[2rem] flex flex-col items-center text-center gap-sm transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-secondary-fixed/60 dark:bg-on-secondary-fixed-variant/40 flex items-center justify-center text-secondary dark:text-secondary-fixed-dim mb-xs shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed-dim font-bold">Quality Assurance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Ensuring every interaction is smooth, bug-free, and exactly as bubbly as intended.</p>
          </div>
          {/* Service 3 */}
          <div className="pastel-glass-purple glow-card p-lg rounded-[2rem] flex flex-col items-center text-center gap-sm transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-tertiary-fixed/60 dark:bg-on-tertiary-fixed-variant/40 flex items-center justify-center text-tertiary dark:text-tertiary-fixed mb-xs shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>task_alt</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-tertiary dark:text-tertiary-fixed-dim font-bold">Project Manager</h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Keeping everything organized, on time, and keeping the team's spirits high.</p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="bg-surface-container-low dark:bg-zinc-900/50 p-lg md:p-xl rounded-xl space-y-lg relative overflow-hidden border border-outline-variant/10">
        {/* Background Blob for Container */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed dark:bg-on-primary-fixed-variant/30 rounded-full blur-3xl opacity-50 -z-0 pointer-events-none"></div>
        <div className="relative z-10 text-center space-y-xs">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface uppercase tracking-tight font-extrabold">Technical Toolkit</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">The gears and creative tools behind the bubbles.</p>
        </div>
        <div className="relative z-10 space-y-md w-full overflow-hidden mask-gradient py-4">
          {/* Row 1: Languages & Frameworks (Right to Left) */}
          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee flex gap-md pr-md">
              {techStack.concat(techStack).map((tech, index) => (
                <div key={index} className="flex items-center gap-sm px-gutter py-sm bg-surface dark:bg-zinc-800 rounded-2xl bubbly-shadow hover:scale-105 hover:border-primary-fixed-dim/40 transition-all duration-300 min-w-[170px] justify-center border border-outline-variant/10 select-none cursor-pointer">
                  {tech.isMaterial ? (
                    <span className={tech.icon} style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{tech.symbol}</span>
                  ) : (
                    <i className={tech.icon}></i>
                  )}
                  <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase tracking-tight font-extrabold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Design & Management (Left to Right) */}
          <div className="flex w-full overflow-hidden">
            <div className="animate-marquee-reverse flex gap-md pr-md">
              {creativeTools.concat(creativeTools).map((tool, index) => (
                <div key={index} className="flex items-center gap-sm px-gutter py-sm bg-surface dark:bg-zinc-800 rounded-2xl bubbly-shadow hover:scale-105 hover:border-secondary-fixed-dim/40 transition-all duration-300 min-w-[170px] justify-center border border-outline-variant/10 select-none cursor-pointer">
                  {tool.isMaterial ? (
                    <span className={tool.icon} style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>{tool.symbol}</span>
                  ) : (
                    <i className={tool.icon}></i>
                  )}
                  <span className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase tracking-tight font-extrabold">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cisco Certifications Showcase Section */}
      <section className="space-y-lg py-md">
        <div className="text-center space-y-xs">
          <div className="inline-block px-4 py-1 bg-secondary-fixed dark:bg-on-secondary-fixed-variant/50 text-on-secondary-fixed-variant dark:text-secondary-fixed rounded-full font-label-md uppercase border border-secondary-fixed/20">Credentials</div>
          <h2 className="font-headline-lg text-headline-lg gradient-text-pastel uppercase tracking-tight font-extrabold">Cisco Certifications</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Verified networking and infrastructure achievements from Cisco Systems.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {certificates.map((cert, i) => (
            <div
              key={i}
              onClick={() => setCertLightbox(cert)}
              className="glass-card glow-card p-md rounded-2xl flex flex-col group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-surface-container dark:bg-zinc-800 rounded-xl overflow-hidden mb-sm border border-outline-variant/10 relative flex items-center justify-center">
                <img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-300" src={cert.img} alt={cert.title} />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="material-symbols-outlined text-white text-3xl font-extrabold">zoom_in</span>
                </div>
              </div>
              <h3 className="font-headline-md text-on-surface dark:text-inverse-on-surface text-base mb-xs line-clamp-2 font-bold">{cert.title}</h3>
              <span className="font-caption text-caption text-secondary dark:text-secondary-fixed-dim mt-auto uppercase tracking-tighter">{cert.provider}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Creative Process Section */}
      <section className="space-y-lg py-md">
        <div className="text-center space-y-xs">
          <div className="inline-block px-4 py-1 bg-primary-fixed dark:bg-on-primary-fixed-variant/50 text-primary dark:text-primary-fixed-dim rounded-full font-label-md uppercase border border-primary-fixed/20">
            How I Work
          </div>
          <h2 className="font-headline-lg text-headline-lg gradient-text-pastel uppercase tracking-tight font-extrabold">My Creative Process</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">A structured approach to transforming ideas into functional, beautiful systems.</p>
        </div>

        <div className="relative max-w-3xl mx-auto px-md">
          {/* Vertical central timeline line */}
          <div className="absolute left-[35px] sm:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-outline-variant/30 -translate-x-1/2"></div>

          <div className="space-y-lg relative">
            {/* Step 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="sm:w-[45%] order-2 sm:order-1 pl-[60px] sm:pl-0 sm:text-right">
                <div className="pastel-glass-blue p-md rounded-2xl border border-white/50 dark:border-white/5 shadow-sm inline-block w-full text-left">
                  <h3 className="font-headline-md text-lg font-bold text-secondary dark:text-secondary-fixed-dim mb-xs">1. Research & Strategy</h3>
                  <p className="font-body-md text-sm text-on-surface-variant dark:text-outline-variant">
                    Analyzing system requirements, gathering user expectations, and formulating a clean project structure and architecture plan.
                  </p>
                </div>
              </div>
              <div className="absolute left-[35px] sm:left-1/2 w-8 h-8 rounded-full bg-secondary-fixed dark:bg-on-secondary-fixed-variant flex items-center justify-center -translate-x-1/2 z-10 border-4 border-surface dark:border-inverse-surface group-hover:scale-110 transition-transform shadow-sm order-1 sm:order-2">
                <span className="material-symbols-outlined text-secondary dark:text-secondary-fixed-dim text-sm font-bold">search</span>
              </div>
              <div className="hidden sm:block sm:w-[45%] order-3"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="hidden sm:block sm:w-[45%]"></div>
              <div className="absolute left-[35px] sm:left-1/2 w-8 h-8 rounded-full bg-primary-fixed dark:bg-on-primary-fixed-variant flex items-center justify-center -translate-x-1/2 z-10 border-4 border-surface dark:border-inverse-surface group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-sm font-bold">palette</span>
              </div>
              <div className="sm:w-[45%] pl-[60px] sm:pl-0 text-left">
                <div className="pastel-glass-pink p-md rounded-2xl border border-white/50 dark:border-white/5 shadow-sm inline-block w-full">
                  <h3 className="font-headline-md text-lg font-bold text-primary dark:text-primary-fixed-dim mb-xs">2. Wireframing & Design</h3>
                  <p className="font-body-md text-sm text-on-surface-variant dark:text-outline-variant">
                    Developing modern, pixel-perfect user interface layouts and prototypes in Figma with soft, pastel-themed aesthetics.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="sm:w-[45%] order-2 sm:order-1 pl-[60px] sm:pl-0 sm:text-right">
                <div className="pastel-glass-purple p-md rounded-2xl border border-white/50 dark:border-white/5 shadow-sm inline-block w-full text-left">
                  <h3 className="font-headline-md text-lg font-bold text-tertiary dark:text-tertiary-fixed mb-xs">3. Frontend Development</h3>
                  <p className="font-body-md text-sm text-on-surface-variant dark:text-outline-variant">
                    Writing optimized React and CSS code to bring dynamic elements, hover highlights, and interactive layouts to life.
                  </p>
                </div>
              </div>
              <div className="absolute left-[35px] sm:left-1/2 w-8 h-8 rounded-full bg-tertiary-fixed dark:bg-on-tertiary-fixed-variant flex items-center justify-center -translate-x-1/2 z-10 border-4 border-surface dark:border-inverse-surface group-hover:scale-110 transition-transform shadow-sm order-1 sm:order-2">
                <span className="material-symbols-outlined text-tertiary dark:text-tertiary-fixed text-sm font-bold">code</span>
              </div>
              <div className="hidden sm:block sm:w-[45%] order-3"></div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col sm:flex-row items-start sm:justify-between group">
              <div className="hidden sm:block sm:w-[45%]"></div>
              <div className="absolute left-[35px] sm:left-1/2 w-8 h-8 rounded-full bg-green-200 dark:bg-green-950 flex items-center justify-center -translate-x-1/2 z-10 border-4 border-surface dark:border-inverse-surface group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-green-700 dark:text-green-400 text-sm font-bold">bug_report</span>
              </div>
              <div className="sm:w-[45%] pl-[60px] sm:pl-0 text-left">
                <div className="pastel-glass-green p-md rounded-2xl border border-white/50 dark:border-white/5 shadow-sm inline-block w-full">
                  <h3 className="font-headline-md text-lg font-bold text-green-800 dark:text-green-400 mb-xs">4. Testing & QA</h3>
                  <p className="font-body-md text-sm text-on-surface-variant dark:text-outline-variant">
                    Conducting cross-device checks, bug testing, and detail polishing to ensure standard-compliant, butter-smooth experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-lg py-md">
        <div className="text-center space-y-xs">
          <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface uppercase tracking-tight">Education</h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-outline-variant">Where the learning journey began.</p>
        </div>
        <div className="bg-surface-container-lowest dark:bg-zinc-900 p-lg rounded-xl border border-surface-variant dark:border-outline/25 bubbly-shadow max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-md">
          <div className="w-20 h-20 rounded-full bg-primary-fixed dark:bg-zinc-800 flex items-center justify-center text-primary dark:text-primary-fixed-dim shrink-0">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 700" }}>school</span>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface text-lg">BS in Information Technology (BSIT)</h3>
            <p className="font-body-md text-on-surface-variant dark:text-outline-variant">Fourth-Year Undergrad student • 2022 - Present</p>
          </div>
        </div>
      </section>

      {/* Cisco Lightbox Modal */}
      {certLightbox && (
        <div
          onClick={() => setCertLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-md opacity-100 transition-opacity duration-300 select-none"
        >
          <button
            onClick={() => setCertLightbox(null)}
            className="absolute top-5 right-5 text-white hover:text-primary transition-colors z-[60] bg-black/40 p-xs rounded-full flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center gap-sm relative" onClick={(e) => e.stopPropagation()}>
            <img className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10" src={certLightbox.img} alt={certLightbox.title} />
            <div className="text-white font-caption font-bold text-caption tracking-wider mt-sm bg-black/60 px-md py-xs rounded-full">
              {certLightbox.title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
