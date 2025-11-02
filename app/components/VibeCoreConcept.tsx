// app/components/VibeCoreConcept.tsx
import styles from './VibeCoreConcept.module.css';
import { BsXCircle, BsCheckCircle } from 'react-icons/bs';

type VibeCoreConceptProps = {
  t: {
    title: string;
    problem: {
      title: string;
      points: string[];
    };
    solution: {
      title: string;
      points: string[];
    };
  }
}

const VibeCoreConcept = ({ t }: VibeCoreConceptProps) => {
  return (
    <section className={styles.conceptSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>{t.title}</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.problem}`}>
            <h3 className={styles.cardTitle}>{t.problem.title}</h3>
            <ul className={styles.pointList}>
              {t.problem.points.map((point, index) => (
                <li key={index}><BsXCircle className={styles.icon} /> {point}</li>
              ))}
            </ul>
          </div>
          <div className={`${styles.card} ${styles.solution}`}>
            <h3 className={styles.cardTitle}>{t.solution.title}</h3>
            <ul className={styles.pointList}>
              {t.solution.points.map((point, index) => (
                <li key={index}><BsCheckCircle className={styles.icon} /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VibeCoreConcept;