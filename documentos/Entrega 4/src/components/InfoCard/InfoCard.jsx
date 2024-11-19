import React from "react";
import styles from "./InfoCard.module.css";
import { Link } from "react-router-dom";

const InfoCard = ({ imageSrc, title, description, linkText }) => {
    return (
        <div className={styles.card} id="conteinerCard">
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt={title} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link href="#" className={styles.link}>{linkText}</Link>
            </div>
        </div>
    );
}

export default InfoCard;
