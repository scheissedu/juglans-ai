import styles from './LegalPageLayout.module.css';

type ContentItem = {
  heading: string;
  text: string;
};

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  content: ContentItem[];
};

const LegalPageLayout = ({ title, lastUpdated, content }: LegalPageLayoutProps) => {
  return (
    <section className={styles.legalSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lastUpdated}>{lastUpdated}</p>
        <div className={styles.content}>
          {content.map((item, index) => (
            <div key={index} className={styles.contentBlock}>
              <h2 className={styles.heading}>{item.heading}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPageLayout;