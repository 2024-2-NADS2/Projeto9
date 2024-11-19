import React from "react";
import styles from "./ArrowButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"; 
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"; 
const ArrowButton = () => {
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.button}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className={styles.button}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default ArrowButton;
