import React from "react";
import styles from "./AboutContent.module.css";

const AboutContent = () => {
    return (
        <div className={styles.aboutContent}>
            <div className={styles.aboutTitleCard} id="conteinerCard">
                <div>
                    <h3 className={styles.aboutContentTitle}>Missão</h3>
                    <p className={styles.aboutContentSubscription}>Ser o maior programa de adoção responsável no país, criando uma rede de apoio entre adotantes, ONGs e protetores parceiros, transformando a vida de animais e pessoas por meio da conscientização, educação e amor à causa animal.</p>
                </div>
                <div>
                    <h3 className={styles.aboutContentTitle}>Visão</h3>
                    <p className={styles.aboutContentSubscription}>Facilitar a adoção de animais, promovendo o encontro entre pessoas e pets que precisam de um lar. Buscamos incentivar a posse responsável, educar sobre o bem-estar animal e fomentar a cultura da doação para garantir um futuro melhor para os animais abandonados.</p>
                </div>
                <div>
                    <h3 className={styles.aboutContentTitle}>Valores</h3>
                    <p className={styles.aboutContentSubscription}>Empatia: Entendemos as necessidades tanto dos animais quanto das famílias adotivas e buscamos sempre agir com sensibilidade e respeito.
                        <br />
                        <br />
                        Responsabilidade: Apoiamos a adoção consciente e a posse responsável, orientando os adotantes sobre o compromisso de cuidar dos animais ao longo de suas vidas.
                        <br />
                        <br />
                        Compromisso com a Vida Animal: Acreditamos na importância de dar uma segunda chance aos animais abandonados, proporcionando um lar seguro e amoroso.
                        <br />
                        <br />
                        Solidariedade: Trabalhamos em parceria com ONGs e protetores para ampliar o alcance e a eficácia de nossos esforços em prol dos animais.
                        <br />
                        <br />
                        Educação: Investimos na conscientização e no ensino sobre a importância da adoção, do bem-estar animal e da cultura de doação.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;