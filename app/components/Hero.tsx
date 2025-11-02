// app/components/Hero.tsx
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import styles from './Hero.module.css';

type HeroProps = {
  t: {
    badge: string;
    title_line1: string;
    title_line2: string;
    subtitle: string;
    cta: string;
    terminalCommands: string[];
  }
}

const Hero = ({ t }: HeroProps) => {
  const commands = useMemo(() => t.terminalCommands, [t.terminalCommands]);
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentCommand = commands[index];
      if (isDeleting) {
        setDisplayedText(currentCommand.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentCommand.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === currentCommand) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % commands.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, index, commands]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>
      
      <div className={styles.content}>
        <div className={styles.badge}>
          {t.badge}
        </div>
        <h1 className={styles.mainHeading}>
          {t.title_line1}<br />
          <span className={styles.glowText}>{t.title_line2}</span>
        </h1>
        <p className={styles.subheading}>
          {t.subtitle}
        </p>
        
        <div className={styles.terminal}>
            <span className={styles.prompt}>$</span>
            <span>{displayedText}</span>
            <span className={styles.cursor}></span>
        </div>

        <a href="https://app.juglans.ai" target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
          {t.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;