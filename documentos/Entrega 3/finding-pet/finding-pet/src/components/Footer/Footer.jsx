import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/images/Logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <footer className={styles.footer}>
            <div className={styles.about}>
                <img src={logo} alt="Logo da ONG Finding Pet" className={styles.logo} />
                <p>FindingPet é um programa criado para estreitar laços entre pessoas que têm o sonho de adotar um pet e nossa ONG e protetor parceiro. Vamos juntos incentivar a adoção, conscientizar sobre a posse responsável e fomentar a cultura de doação em prol do bem-estar animal.</p>
            </div>
            <div className={styles.linksSection}>
                <h4>Institucional</h4>
                <ul>
                    <li className={styles.link} onClick={scrollToTop}><Link to="/about-us">Sobre Nós</Link></li>
                    <li>FindingPet Lovers</li>
                    <li>Projetos Sociais</li>
                    <li>Unidades</li>
                    <li>Faqs</li>
                </ul>
            </div>
            <div className={styles.linksSection}>
                <h4>Como Ajudar?</h4>
                <ul>
                    <li>Quero Adotar</li>
                    <li>Quero Doar</li>
                    <li>ONG</li>
                </ul>
            </div>
            <div className={styles.socialMedia}>
                <h4>Mídias Sociais</h4>
                <ul className={styles.socialIcons}>
                    <li>
                        <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faComment} className={styles.icon} />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
