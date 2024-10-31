import React from "react";
import styles from "./Adoptions.module.css";
import ButtonCallToAction from "../ButtonCallToAction/ButtonCallToAction";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import dinoImage from "../../assets/images/dino.png"
import pitucaImage from "../../assets/images/pituca.png"
import belinhaImage from "../../assets/images/belinha.png"
import thorImage from "../../assets/images/thor.png"

const Adoption = () => {
    const dogs = [
        {
            image: dinoImage,
            name: "Dino",
            alt: "Foto de Dino",
            breed: "Vira-lata",
            age: "2 meses",
            sex: "Macho",
            color: "Preto",
            size: "Pequeno",
            health: "Vacinado"
        },
        {
            image: pitucaImage,
            name: "Pituca",
            alt: "Foto de Pituca",
            breed: "Yorkshire",
            age: "3 anos",
            sex: "Fêmea",
            color: "Marrom e preto",
            size: "Pequeno",
            health: "Vacinada, Castrada"
        },
        {
            image: belinhaImage,
            name: "Belinha",
            alt: "Foto de Belinha",
            breed: "Vira-lata",
            age: "10 meses",
            sex: "Fêmea",
            color: "Caramelo",
            size: "Médio",
            health: "Vacinada, Castrada"
        },
        {
            image: thorImage,
            name: "Thor",
            alt: "Foto de Thor",
            breed: "Beagle",
            age: "2 anos",
            sex: "Macho",
            color: "Branco, marrom e preto",
            size: "Médio",
            health: "Vacinado, Castrado"
        }
    ];

    return (
        <div className={styles.adoption_card}>
            <h1>Mais Adoções</h1>
            <div className={styles.cardContainer}>
                {dogs.map((dog, index) => (
                    <div key={index} className={styles.card} id="conteinerCard">
                        <img src={dog.image} alt={dog.alt} />
                        <h2>{dog.name}</h2>
                        <div className={styles.info}>
                            <ul>
                                <li><strong>Raça:</strong> {dog.breed}</li>
                                <li><strong>Idade:</strong> {dog.age}</li>
                                <li><strong>Sexo:</strong> {dog.sex}</li>
                                <li><strong>Cor:</strong> {dog.color}</li>
                                <li><strong>Porte:</strong> {dog.size}</li>
                                <li><strong>Saúde:</strong> {dog.health}</li>
                            </ul>
                        </div>
                        <ButtonCallToAction 
                            icon={faWhatsapp} 
                            text="Quero adotar" 
                            isAdoptionPage={true}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adoption;
