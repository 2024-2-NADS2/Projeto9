import React from "react";
import styles from "./NewsCard.module.css";
import vacinacao from "../../assets/images/vacinacao.jpg"
import adocao from "../../assets/images/adocao.jpg"
import campanha from "../../assets/images/campanha.jpeg"
import dogsadboiola from "../../assets/images/dogsadboiola.jpg"
import caesresgatados from "../../assets/images/caesresgatados.jpg"

const NewsCard = () => {
    const news = [
        {
            image: vacinacao,
            title: "Saúde: Vacinação gratuita contra a raiva para cães e gatos começa no dia 23/11.",
            alt: "Descrição da imagem principal"
        },
        {
            image: adocao,  
            title: "Adoção consciente de animais reduz os motivos que levam ao abandono.",
            alt: "Descrição da imagem secundária 1"
        },
        {
            image: campanha,  
            title: "Campanha de adoções desse sábado foca em cães sem raça definida.",
            alt: "Descrição da imagem secundária 2"
        },
        {
            image: dogsadboiola, 
            title: "Adotou um cachorro? Estudo aponta o que esperar nos primeiros 6 meses.",
            alt: "Descrição da imagem secundária 3"
        },
        {
            image: caesresgatados, 
            title: "Maus-tratos: cães usados para caça são resgatados.",
            alt: "Descrição da imagem secundária 4"
        }
    ];

    return (
        <div className={styles.more_news}>
            <h1>Mais Notícias</h1>
            <div className={styles.newsContainer}>
                <h1>Mais Notícias</h1>
                <div className={styles.mainNews}>
                    <img src={news[0].image} alt={news[0].alt} />
                    <div className={styles.newsOverlay}></div>
                    <div className={styles.newsTitle}>
                        <h2>{news[0].title}</h2>
                    </div>
                </div>

                <div className={styles.secondaryNewsContainer}>
                    {news.slice(1).map((item, index) => (
                        <div key={index} className={styles.secondary_news}>
                            <img src={item.image} alt={item.alt} />
                            <div className={styles.newsOverlay}></div>
                            <div className={styles.newsTitle}>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsCard;
