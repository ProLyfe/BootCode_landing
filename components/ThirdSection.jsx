import styles from '../styles/thirdSection.module.css';
import ContentCard from './ContentCard';

const ThirdSection = () => (
    <div className={styles.thirdSection}>
        <ContentCard icone="icone1.png" text="Une plateforme collabotarive, partager votre code avec les autres utilisateurs"/>
        <ContentCard icone="icone2.png" text="Du code disponible pour tous les niveaux que ce soit développeur ou designer"/>
        <ContentCard icone="icone3.png" text="Un ajout de code rapide et simple."/>
        <img className={styles.projectImageGradiant} src="/rainbow.png" alt=""/>
    </div>
);

export default ThirdSection;