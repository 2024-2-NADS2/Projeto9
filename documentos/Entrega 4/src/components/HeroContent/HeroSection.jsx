import React from "react";
import styles from "./HeroSection.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButtonCallToAction from "../ButtonCallToAction/ButtonCallToAction";

const HeroSection = ({image, title, description, alt, button = false, isAdoptPage = true}) => {
    return (
        <div className={isAdoptPage ? styles.adopt_hero_section : styles.hero_section }>
            <div>
                <img src={image} alt={alt} />
            </div>
            <div className={isAdoptPage? styles.adoptHeroContentMobile : styles.heroContentMobile}>
                <h2>{title}</h2>
                <p>
                    {description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                {button === true ?(
                <ButtonCallToAction icon={faArrowRight} text="ADOTE" isAdoptionPage = {false} />
                ): null}
            </div>
        </div>
    );
}

export default HeroSection;
