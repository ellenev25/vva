import React, { useEffect, useState } from 'react';

export default function Toast({ message, type }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  let icon = 'info';
  let color = 'text-primary dark:text-primary-fixed-dim';
  if (type === 'success') {
    icon = 'check_circle';
    color = 'text-green-500';
  } else if (type === 'error') {
    icon = 'error';
    color = 'text-red-500';
  }

  return (
    <div className={`flex items-center gap-sm px-md py-sm bg-white dark:bg-zinc-800 text-on-surface dark:text-inverse-on-surface shadow-lg rounded-xl border border-outline-variant/20 dark:border-white/5 transition-all duration-300 pointer-events-auto ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      <span className="font-body-md">{message}</span>
    </div>
  );
}
