// app/components/Features.tsx
import React from 'react';
import styles from './Features.module.css';
import { BsChatDots, BsEye, BsSearch, BsSliders, BsShieldCheck, BsBook } from 'react-icons/bs';

// 定义传递给组件的翻译(t)对象的类型
type FeaturesProps = {
  t: {
    title: string;
    subtitle: string;
    cards: {
      conversational: { title: string; description: string };
      visualized: { title: string; description: string };
      scanner: { title: string; description: string };
      automated: { title: string; description: string };
      planFirst: { title: string; description: string };
      mentor: { title: string; description: string };
    }
  }
}

const Features = ({ t }: FeaturesProps) => {
  // 将图标与从props接收到的翻译文本结合起来
  const featuresData = [
    { icon: <BsChatDots />, ...t.cards.conversational },
    { icon: <BsEye />, ...t.cards.visualized },
    { icon: <BsSearch />, ...t.cards.scanner },
    { icon: <BsSliders />, ...t.cards.automated },
    { icon: <BsShieldCheck />, ...t.cards.planFirst },
    { icon: <BsBook />, ...t.cards.mentor },
  ];

  return (
    <section id="features" className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>{t.title}</h2>
          <p className={styles.subheading}>{t.subtitle}</p>
        </div>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;