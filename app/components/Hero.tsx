'use client';
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const commands = [
    "Find tech stocks hitting 52-week lows...",
    "Compare NVDA and AMD's P/E ratios...",
    "What's the market sentiment on crypto today?",
    "Show me ESG funds with high returns...",
  ];
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
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
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
          全球第一个 Vibe Trading App
        </div>
        <h1 className={styles.mainHeading}>
          未来交易<br />
          <span className={styles.glowText}>开口即得</span>
        </h1>
        <p className={styles.subheading}>
          Juglans，通过自然语言赋能你的投资决策。告别复杂图表，与你的专属AI交易员对话。
        </p>
        
        <div className={styles.terminal}>
            <span className={styles.prompt}>$</span>
            <span>{displayedText}</span>
            <span className={styles.cursor}></span>
        </div>

        <a href="https://app.juglans.ai" target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
          立即体验 →
        </a>
      </div>
    </section>
  );
};

export default Hero;