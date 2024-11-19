import React from "react";
import MainDescription from "../components/MainDescription/MainDescription"
import HighlightedCard from "../components/HighlightedAdoptionCard/HighlightedCard";
import corgi from "../assets/images/corgi.png"
import NewsCard from "../components/NewsCard/NewsCard";
const News = () => {
    return (
        <main className="container">
            <div className="pages_content">
                <MainDescription 
                title="Confira as Notícias!"
                description={`Fique por dentro das últimas notícias sobre cães!\nAcompanhe informações atualizadas sobre adoções, mudanças no perfil de popularidade das raças, e dicas de cuidados para melhorar a qualidade de vida dos pets.`}
                />
                <HighlightedCard 
                title = "Notícia do Dia"
                image= {corgi}
                alt = "Foto de corgi correndo feliz"
                name = {false}
                description={`Recentemente, os Corgis ganharam ainda mais popularidade, especialmente nas redes sociais, devido ao seu comportamento carismático e aparência adorável. Agora, muitos donos estão investindo em aulas de treinamento avançado para essa raça, já que os Corgis são conhecidos por sua inteligência e capacidade de aprender comandos rapidamente. Além disso, há uma nova tendência de competições de agilidade para Corgis, onde eles demonstram suas habilidades atléticas e de obediência, surpreendendo o público com sua velocidade e destreza!`}
                info = {false}
                isNewsPage = {true}
                />
                <NewsCard 
                image={corgi}
                />
            </div>
        </main>
    );
};

export default News;