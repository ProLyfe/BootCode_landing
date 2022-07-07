import styles from '../styles/header.module.css';

const Header = () => (
    <div className={styles.header}>
        <img src='logo.svg' alt="An SVG of an eye" className={styles.image}/>
        <nav className={styles.nav}>
            <a href="" className={styles.navLinks}>Le projet</a>
            <a href="" className={styles.navLinks}>Comment ça marche</a>
            <a href="" className={styles.navLinks}>L'équipe</a>
            <a href="" className={styles.navLinks}>
              <button className={styles.navButton}>GO</button>  
            </a>
        </nav>
    </div>
);

export default Header;