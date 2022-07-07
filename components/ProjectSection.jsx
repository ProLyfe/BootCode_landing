import styles from '../styles/projectSection.module.css';
import Image from 'next/image'

const ProjectSection = () => (
    <div className={styles.firstSection}>
        {/* <div className={styles.projectContainer}> */}
            <div className={styles.projectTextContainer}>
                <div className={styles.projectTextSubContainer}>
                    <h1 className={styles.title}>Projet</h1>
                    <p>Pour les développeurs de tout niveau, qui veulent récupérer<br />
                    des bouts de code, BootCode est un site web qui propose<br />
                    des éléments de code à récupérer facilement pour vos site <br />web, le code sera « vanilla » vous n’aurez pas besoin <br />
                    d’installer d’api. <br />
                    C’est une plateforme collaboratif chacun est libre de partager son code sur ce site.
                    </p>
                    <button className={styles.contentButton}>GO</button>
                </div>
            </div>
            <div className={styles.projectImageContainer}>
                <div className={styles.projectImageFirst}></div>
                <div className={styles.projectImageSecond}></div>
                <img className={styles.projectImageGradiant} src="/rainbow.png" alt=""/>
                {/* <div className={styles.projectImageGradiant}></div> */}
            </div>
        </div>
    // </div>
);

export default ProjectSection;