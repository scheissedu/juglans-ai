import Image from 'next/image';
import styles from './Header.module.css'; // 导入 CSS Module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src="/logo.svg" alt="Juglans Logo" width={40} height={40} />
          <span className={styles.logoText}>Juglans</span>
        </div>
        <a 
          href="https://app.juglans.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Launch App
        </a>
      </div>
    </header>
  );
};

export default Header;