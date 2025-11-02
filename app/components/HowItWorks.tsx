// app/components/HowItWorks.tsx
import React from 'react';
import styles from './HowItWorks.module.css';
import { BsBroadcast, BsCpu, BsCursorText } from 'react-icons/bs';

type HowItWorksProps = {
  t: {
    title: string;
    subtitle: string;
    pillars: {
      sense: { title: string; description: string };
      think: { title: string; description: string };
      act: { title: string; description: string };
    }
  }
}

const HowItWorks = ({ t }: HowItWorksProps) => {
  const pillarsData = [
    { icon: <BsBroadcast />, ...t.pillars.sense },
    { icon: <BsCpu />, ...t.pillars.think },
    { icon: <BsCursorText />, ...t.pillars.act },
  ];

  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>{t.title}</h2>
          <p className={styles.subheading}>{t.subtitle}</p>
        </div>
        <div className={styles.pillarsGrid}>
          {pillarsData.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <div className={styles.icon}>{pillar.icon}</div>
              <h3 className={styles.title}>{pillar.title}</h3>
              <p className={styles.description}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;