import styles from '../styles/contentCard.module.css';

const ContentCard = ({ icone, text }) => (
    <div className={styles.contentCard}>
        <img src={icone} alt="An SVG of an eye" className={styles.icone}/>
        <p>{text}</p>
    </div>
);

export default ContentCard;