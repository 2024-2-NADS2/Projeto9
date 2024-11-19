import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Logo.png';
import styles from './Header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Header = ({ toggleTheme, darkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header} id="header">
            <div className={styles.logoContainer}>
                <img src={logo} alt="Logo da Finding Pet" className={styles.logo} />
            </div>

            <nav className={`${styles.navigation} ${menuOpen ? styles.active : ''}`}>
                <ul id="conteinerCard">
                    <li className={styles.link}><Link to="/" onClick={handleLinkClick}>Início</Link></li>
                    <li className={styles.link}><Link to="/news" onClick={handleLinkClick}>Notícias</Link></li>
                    <li className={styles.link}><Link to="/adopt" onClick={handleLinkClick}>Adote</Link></li>
                    <li className={styles.link}><Link to="/care" onClick={handleLinkClick}>Cuidados</Link></li>
                    <li className={styles.link}><Link to="/contact" onClick={handleLinkClick}>Contato</Link></li>
                </ul>
            </nav>

            <button className={styles.hamburger} onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className={styles.icon} />
            </button>

            <div className={styles.icons}>
                <Link to="/sign-up" className={styles.iconButton} id="button">
                    <FontAwesomeIcon icon={faUser} className={styles.icon} />
                </Link>
                <button type="button" onClick={toggleTheme} className={styles.iconButton}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className={styles.icon} />
                </button>
            </div>
        </header>
    );
}

export default Header;
