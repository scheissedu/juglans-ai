// app/components/VibeHero.tsx
import styles from './VibeHero.module.css';

type VibeHeroProps = {
  t: {
    title: string;
    subtitle: string;
  }
}

const VibeHero = ({ t }: VibeHeroProps) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>
    </section>
  );
};

export default VibeHero;