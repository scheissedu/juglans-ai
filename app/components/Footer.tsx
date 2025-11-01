import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <Image src="/logo.svg" alt="Juglans Logo" width={30} height={30} />
          <p>&copy; {new Date().getFullYear()} Juglans.ai. All rights reserved.</p>
        </div>
        <div className={styles.links}>
          <a href="#">Twitter</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;