import React from "react";
import HeroContent from "../components/HeroContent/HeroSection";
import adoptMeDog from "../assets/images/cachorrinho_ownt.png"
import HighlightedCard from "../components/HighlightedAdoptionCard/HighlightedCard";
import Adoption from "../components/Adoption/Adoption";
import bidu from "../assets/images/bidu.png"

const Adopt = () => {
    return (
        <main className="container">
            <div className="pages_content">
                <HeroContent
                image = {adoptMeDog}
                alt = 'Foto de um cão com placa me adota'
                title = 'Adote seu doguinho e leve para seu novo lar ainda hoje!'
                description= {`Veja abaixo a lista de cães que estão na fila para adoção, mas lembre-se de que a adoção precisa ser responsável. Afinal, adotar um cão é um compromisso, para que ele receba os cuidados e o amor necessários.`}
                />
                <HighlightedCard 
                title = 'Adoção em Destaque'
                image = {bidu}
                alt = 'Foto de um cão branco olhando pra câmera'
                name = 'Bidu'
                description="Conheça o Bidu, um vira-lata de 4 anos que, mesmo com apenas um olhinho, é pura alegria. Ele é super dócil e está sempre pronto para uma brincadeira. O bidu só quer uma chance de encontrar uma família que o ame como ele é e, em troca, ele promete encher sua casa de carinho e diversão."
                />
                <Adoption />
            </div>
        </main>
    );
};

export default Adopt;