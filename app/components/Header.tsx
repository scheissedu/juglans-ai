'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 引入 Link 组件
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';
import { Locale } from '@/i18n-config';

type HeaderProps = {
  lang: Locale;
  t: {
    nav: {
      whatIsVibeTrading: string;
      products: string;
      company: string;
      learn: string;
      support: string;
    };
    launchApp: string;
  };
};

const Header = ({ lang, t }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo 区域被替换为可点击的 Link 组件 */}
        <Link href={`/${lang}`} className={styles.logoContainer}>
          <Image src="/logo.svg" alt="Juglans Logo" width={40} height={40} />
          <span className={styles.logoText}>Juglans</span>
        </Link>
        
        <nav className={styles.desktopNav}>
          <a href={`/${lang}/what-is-vibe-trading`}>{t.nav.whatIsVibeTrading}</a>
          <a href={`/${lang}/#features`}>{t.nav.products}</a>
          <a href="#">{t.nav.company}</a>
          <a href="#">{t.nav.learn}</a>
          <a href="#">{t.nav.support}</a>
        </nav>

        <div className={styles.actionsContainer}>
          <LanguageSwitcher />
          <a
            href="https://app.juglans.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {t.launchApp}
          </a>
        </div>

        <button className={styles.mobileMenuButton} onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobileNav}>
          <a href={`/${lang}/what-is-vibe-trading`} onClick={toggleMenu}>{t.nav.whatIsVibeTrading}</a>
          <a href={`/${lang}/#features`} onClick={toggleMenu}>{t.nav.products}</a>
          <a href="#" onClick={toggleMenu}>{t.nav.company}</a>
          <a href="#" onClick={toggleMenu}>{t.nav.learn}</a>
          <a href="#" onClick={toggleMenu}>{t.nav.support}</a>
          
          <div className={styles.mobileActions}>
            <LanguageSwitcher />
            <a 
              href="https://app.juglans.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.mobileCtaButton}
              onClick={toggleMenu}
            >
              {t.launchApp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;