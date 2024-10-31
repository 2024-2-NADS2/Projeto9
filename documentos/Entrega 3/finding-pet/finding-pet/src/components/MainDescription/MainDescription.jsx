import React from "react";
import styles from "./MainDescription.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButtonCallToAction from "../ButtonCallToAction/ButtonCallToAction";

const MainDescription = ({title, description, button = false}) => {
    return (
        <div className={styles.main_description}>
            <h1>{title}</h1>
            <p>
                {description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
            {button == true ?(
            <ButtonCallToAction icon={faArrowRight} text="ADOTE" isAdoptionPage = {false} />
            ): null}
        </div>
    );
}

export default MainDescription;
