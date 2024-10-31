import React from "react";
import styles from "./NewsCard.module.css";
import corgi from "../../assets/images/corgi.png"

const NewsCard = () => {
    const news = [
        {
            image: corgi,
            title: "Título da notícia principal",
            alt: "Descrição da imagem principal"
        },
        {
            image: "imagem-secundaria-1-url.jpg",  
            title: "Título da notícia secundária 1",
            alt: "Descrição da imagem secundária 1"
        },
        {
            image: "imagem-secundaria-2-url.jpg",  
            title: "Título da notícia secundária 2",
            alt: "Descrição da imagem secundária 2"
        },
        {
            image: "imagem-secundaria-3-url.jpg", 
            title: "Título da notícia secundária 3",
            alt: "Descrição da imagem secundária 3"
        },
        {
            image: "imagem-secundaria-4-url.jpg", 
            title: "Título da notícia secundária 4",
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
