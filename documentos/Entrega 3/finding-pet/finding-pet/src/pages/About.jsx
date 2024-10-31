import React from "react";
import AboutContent from "../components/AboutContent/AboutContent";
import MainDescription from "../components/MainDescription/MainDescription";

const About = () => {
    return (
        <main className="container">
            <MainDescription 
            title = "Sobre nós"
            description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat, ligula eu auctor sollicitudin, augue felis consequat sem, sed pharetra arcu turpis eu metus. Fusce finibus ut dui eget tincidunt. Vivamus bibendum at nisi at dapibus.`}
            />
            <AboutContent/>
        </main>
    );
}

export default About;