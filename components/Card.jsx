import styles from '../styles/card.module.css';

const Card = () => (
    <div className={styles.cardContainer}>
        <div className={styles.card}></div>
        <div className={styles.cardText}>Pour les développeurs de tout niveau</div>
    </div>
);

export default Card;