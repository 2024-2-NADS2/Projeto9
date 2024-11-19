import React from "react";
import styles from "./InputInformation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputInformation = ({label, icon, text}) => {
    return(
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputContainer} id="conteinerCard">
                <span className={styles.icon}><FontAwesomeIcon icon={icon}/></span>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    )
}

export default InputInformation;
