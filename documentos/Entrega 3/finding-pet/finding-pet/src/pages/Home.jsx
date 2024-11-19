import React from "react";
import HeroContent from "../components/HeroContent/HeroSection";
import CardSection from "../components/CardSection/CardSection";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import goldenRetriver from "../assets/images/goldenzinho_ownt.png";


const Home = () => {
    return (
        <main className="container">
            <div className="pages_content">
                <HeroContent 
                isAdoptPage = {false}
                image = {goldenRetriver}
                alt = 'Foto de um cão da raça golden retriever'
                title = 'O seu melhor amigo com um clique!'
                description= {`Com responsabilidade e conforto, FindingPet te permite adotar o pet que você tanto procura diretamente da sua casa. Um companheiro de quatro patas para sua vida.`}
                button = {true}
                />
                <CardSection />
                <TestimonialCard />
            </div>
        </main>
    );
};

export default Home;