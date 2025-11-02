import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { Locale } from '@/i18n-config';

// props 类型已更新为 linkedin
type FooterProps = {
  lang: Locale;
  t: {
    copyright: string;
    links: {
      linkedin: string;
      privacy: string;
      terms: string;
    }
  }
}

const Footer = ({ t, lang }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <Image src="/logo.svg" alt="Juglans Logo" width={30} height={30} />
          <p>&copy; {new Date().getFullYear()} {t.copyright}</p>
        </div>
        <div className={styles.links}>
          {/* 链接已更新为 LinkedIn */}
          <a 
            href="https://www.linkedin.com/company/juglans-ai" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t.links.linkedin}
          </a>
          
          <Link href={`/${lang}/privacy-policy`}>{t.links.privacy}</Link>
          <Link href={`/${lang}/terms-of-service`}>{t.links.terms}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;