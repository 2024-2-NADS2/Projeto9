import React from "react";
import styles from "./AboutContent.module.css";

const AboutContent = () => {
    return (
        <div className={styles.aboutContent}>
            <div className={styles.aboutTitleCard} id="conteinerCard">
                <div>
                    <h3 className={styles.aboutContentTitle}>Missão</h3>
                    <p className={styles.aboutContentSubscription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat, ligula eu auctor sollicitudin, augue felis consequat sem, sed pharetra arcu turpis eu metus. Fusce finibus ut dui eget tincidunt. Vivamus bibendum at nisi at dapibus.</p>
                </div>
                <div>
                    <h3 className={styles.aboutContentTitle}>Visão</h3>
                    <p className={styles.aboutContentSubscription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat, ligula eu auctor sollicitudin, augue felis consequat sem, sed pharetra arcu turpis eu metus. Fusce finibus ut dui eget tincidunt. Vivamus bibendum at nisi at dapibus.</p>
                </div>
                <div>
                    <h3 className={styles.aboutContentTitle}>Valores</h3>
                    <p className={styles.aboutContentSubscription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat, ligula eu auctor sollicitudin, augue felis consequat sem, sed pharetra arcu turpis eu metus. Fusce finibus ut dui eget tincidunt. Vivamus bibendum at nisi at dapibus.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;