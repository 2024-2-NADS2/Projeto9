import React from "react";
import styles from "./HighlightedCard.module.css";


const HighlightedCard = ({image, title, name = true, description, info = true, alt, isNewsPage}) => {
    return (
        <div className={styles.highlighted_card }>
            <h1>{title}</h1>
            <div className={isNewsPage ? styles.card_news : styles.card} id="conteinerCard">
                <h2>
                    {name}
                </h2>
                <div>
                    <img src={image} alt={alt} />
                </div>
                <div className={styles.main_info}>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                    {info ?(
                    <div className={styles.info}>
                        <ul>
                            <li><strong>Raça:</strong>  Vira-lata</li>
                            <li><strong>Idade:</strong> 4 anos</li>
                            <li><strong>Sexo:</strong>  Macho</li>
                        </ul>
                        <ul>
                            <li><strong>Cor:</strong>   Branco</li>
                            <li><strong>Porte:</strong> Médio</li>
                            <li><strong>Saúde:</strong> Vacinado</li>
                        </ul>
                    </div>
                    ): null }
                    
                </div>
            </div>
        </div>
    );
}

export default HighlightedCard;