import React, { useState, useEffect } from 'react';

export default function Typewriter({ 
  words = ["Web Developer", "UI/UX Designer", "Quality Assurance", "Software Project Management"], 
  typingSpeed = 150, 
  deletingSpeed = 75, 
  delayBetweenWords = 2000 
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      // Deleting letter by letter
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      // Typing letter by letter
      timer = setTimeout(() => {
        setCurrentText(prev => fullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Handle state transitions
    if (!isDeleting && currentText === fullWord) {
      // Pause at the end of typing the word before starting to delete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && currentText === '') {
      // Done deleting, move to the next word
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center">
      <span className="text-primary dark:text-primary-fixed-dim drop-shadow-[0_2px_8px_rgba(252,180,176,0.3)]">
        {currentText}
      </span>
      <span className="ml-1 w-[3px] h-[1.1em] bg-primary dark:bg-primary-fixed-dim animate-pulse inline-block align-middle"></span>
    </span>
  );
}
