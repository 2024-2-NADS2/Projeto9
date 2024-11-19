import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import bulldogImage from "../../assets/images/bulldog.png";
import jackRussellImage from "../../assets/images/jack_russell.png";
import pinscherImage from "../../assets/images/pinscher.png";
import styles from "./CardSection.module.css"

const CardSection = () => {
    const cardsData = [
        {
            imageSrc: bulldogImage,
            title: "A Respiração do Bulldog.",
            description: "Se você está pensando em ter um buldogue francês, deve estar ciente dos problemas respiratórios do buldogue francês.",
            linkText: "Saiba mais",
        },
        {
            imageSrc: jackRussellImage,
            title: "Abandono e maus-tratos a animais devem superar 185 mil casos em 2024",
            description: "O número de casos de maus-tratos a animais continua alarmante.",
            linkText: "Saiba mais",
        },
        {
            imageSrc: pinscherImage,
            title: "Pinscher a raça mais brava?",
            description: "Quem já conviveu com essa raça sabe que o ditado 'tamanho não é documento' combina com ele.",
            linkText: "Saiba mais",
        }
    ];

    return (
        <div className={styles.cardSectionContainer}>
            {cardsData.map((card, index) => (
                <InfoCard
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    linkText={card.linkText}
                />
            ))}
        </div>
    );
}

export default CardSection;
