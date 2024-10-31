import React from "react";
import styles from "./ButtonCallToAction.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonCallToAction = ({ icon, text, isAdoptionPage }) => {
    return (
        <button className={isAdoptionPage ? styles.adoptionButton : styles.button}>
            <div className={isAdoptionPage ? styles.adoptionIconContainer : styles.iconContainer}>
                <FontAwesomeIcon icon={icon} className={isAdoptionPage ? styles.adoptionIcon : styles.icon} />
            </div>
            <span className={styles.text}>{text}</span>
        </button>
    );
};

export default ButtonCallToAction;
