import styles from '../styles/howToUseSection.module.css';
import Card from './Card';

const HowToUseSection = () => (
    <div className={styles.howToUseSection}>
        <h2 className={styles.subTitle}>Comment utiliser ?</h2>
        <div className={styles.howToUseSectionSub}>
            <div className={styles.howToFirstContainer}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.howToSecondContainer}>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </div>
);

export default HowToUseSection;