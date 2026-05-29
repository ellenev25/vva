import React, { useState } from 'react';

export default function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      showToast("Message sent successfully! Thank you " + formData.name + "! ✨", "success");
      setFormData({ name: '', email: '', message: '' });
    } else {
      showToast("Please fill out all required fields.", "error");
    }
  };

  return (
    <main className="flex-grow w-full py-lg relative z-10">
      <div className="mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row gap-lg items-center lg:items-start max-w-6xl">
        {/* Left Column: Header & Socials */}
        <div className="w-full lg:w-1/2 flex flex-col gap-lg text-center lg:text-left">
          <div className="space-y-sm">
            <div className="inline-block bg-secondary-fixed/50 dark:bg-on-secondary-fixed-variant/50 text-on-secondary-container dark:text-secondary-fixed px-sm py-xs rounded-full font-label-md text-label-md mb-xs border border-secondary-fixed/20">
              Say Hello  
            </div>
            <h1 className="font-headline-xl text-[48px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-on-surface dark:text-inverse-on-surface">Let's connect</span><br />
              <span className="gradient-text-pastel italic">Get in touch.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-outline-variant max-w-md mx-auto lg:mx-0 mt-md">
              Got a project in mind, or just want to chat about design and cute things? Drop me a message below!
            </p>
          </div>
          {/* Social Links Bento Box */}
          <div className="glass-card glow-card rounded-[2rem] p-lg border border-surface-container-high dark:border-outline/10 shadow-sm max-w-md mx-auto lg:mx-0 w-full relative overflow-hidden">
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface font-extrabold mb-md">Connect with me on:</h3>
            <div className="grid grid-cols-4 gap-md justify-items-center">
              <a className="flex flex-col items-center justify-center gap-xs group" href="mailto:velenadrias@plv.edu.ph">
                <div className="w-16 h-16 rounded-full bg-surface-container dark:bg-zinc-800 flex items-center justify-center group-hover:bg-red-100 dark:group-hover:bg-red-950/40 transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[28px] text-tertiary dark:text-tertiary-fixed group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>mail</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant group-hover:text-red-600 dark:group-hover:text-red-400 font-bold transition-colors">Email</span>
              </a>
              <a className="flex flex-col items-center justify-center gap-xs group" href="https://www.linkedin.com/in/velen-v-adrias-309861411" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full bg-surface-container dark:bg-zinc-800 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950/40 transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[28px] text-secondary dark:text-secondary-fixed-dim group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>work</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant group-hover:text-blue-600 dark:group-hover:text-blue-400 font-bold transition-colors">LinkedIn</span>
              </a>
              <a className="flex flex-col items-center justify-center gap-xs group" href="https://web.facebook.com/velen.v.adrias" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full bg-surface-container dark:bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950/40 transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[28px] text-tertiary dark:text-tertiary-fixed group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>thumb_up</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant group-hover:text-indigo-600 dark:group-hover:text-indigo-400 font-bold transition-colors">Facebook</span>
              </a>
              <a className="flex flex-col items-center justify-center gap-xs group" href="https://wa.me/639062310179" target="_blank" rel="noopener noreferrer">
                <div className="w-16 h-16 rounded-full bg-surface-container dark:bg-zinc-800 flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-950/40 transition-colors duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-[28px] text-primary dark:text-primary-fixed-dim group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>chat</span>
                </div>
                <span className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant group-hover:text-green-600 dark:group-hover:text-green-400 font-bold transition-colors">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Column: Contact Form */}
        <div className="w-full lg:w-1/2 glass-card glow-card rounded-[3rem] p-lg md:p-xl border border-white/80 dark:border-white/5 relative">
          {/* Internal Glow effect for the top edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent dark:via-white/20 rounded-t-[3rem] opacity-50"></div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant ml-xs" htmlFor="name">Your Name</label>
              <input 
                required 
                className="w-full bg-surface-container-low dark:bg-zinc-800 border-2 border-surface-variant dark:border-outline/20 rounded-xl px-md py-sm font-body-md text-body-md text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/60 focus:outline-none bubbly-input" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Jane Doe" 
                type="text" 
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant ml-xs" htmlFor="email">Email Address</label>
              <input 
                required 
                className="w-full bg-surface-container-low dark:bg-zinc-800 border-2 border-surface-variant dark:border-outline/20 rounded-xl px-md py-sm font-body-md text-body-md text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/60 focus:outline-none bubbly-input" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="hello@example.com" 
                type="email" 
              />
            </div>
            <div className="flex flex-col gap-xs">
              <label className="font-label-md text-label-md text-on-surface-variant dark:text-outline-variant ml-xs" htmlFor="message">Your Message</label>
              <textarea 
                required 
                className="w-full bg-surface-container-low dark:bg-zinc-800 border-2 border-surface-variant dark:border-outline/20 rounded-xl px-md py-sm font-body-md text-body-md text-on-surface dark:text-inverse-on-surface placeholder:text-outline-variant/60 focus:outline-none bubbly-input resize-none" 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your amazing idea..." 
                rows="5"
              ></textarea>
            </div>
            <button className="mt-md bg-primary text-on-primary dark:bg-primary-container dark:text-on-primary-container font-headline-md text-headline-md py-sm rounded-xl bubbly-button flex items-center justify-center gap-sm relative overflow-hidden group" type="submit">
              <div className="absolute inset-x-0 top-0 h-px bg-white/30 rounded-t-xl"></div>
              <span>Send Message</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
