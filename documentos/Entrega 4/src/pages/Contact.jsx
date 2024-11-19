import React from "react";
import ContactForm from "../components/Forms/ContactForm/ContactForm";
import MainDescription from "../components/MainDescription/MainDescription";

const Contact = () => {
    return (
        <main className="container">
            <MainDescription 
            title = "Fale conosco"
            description={`Estamos aqui para tirar suas dúvidas sobre adoção ou qualquer outra questão!`}
            />
            <ContactForm/>
        </main>
    );
};

export default Contact;