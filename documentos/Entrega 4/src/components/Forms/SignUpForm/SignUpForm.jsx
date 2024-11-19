import { faFacebook, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCallToAction from "../../ButtonCallToAction/ButtonCallToAction";
import styles from "./SignUpForm.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    return (
        <div className={styles.fullScreenContainer}>
            <div className={styles.container}>
                
                <div className={styles.loginSection}>
                    <h1 className={styles.loginSectionTitle}>Bem-vindo de volta!</h1>
                    <p className={styles.loginSectionDescription}>Para continuar conectado conosco, faça o login:</p>
                    <form action="" className={styles.formForm}>
                        <div className={styles.formGroup}>
                            <input type="email" id="email" placeholder="E-Mail" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="password" id="senha" placeholder="Senha" required/>
                        </div>
                    </form>
                    <Link to={'/'} className={styles.link}>
                        <ButtonCallToAction icon={faArrowRight} text="Logar" />
                    </Link>
                </div>

                <div className={styles.signupSection}>
                    <h2 className={styles.loginSectionTitle}>Crie uma conta</h2>
                    
                    <form action="" className={styles.formForm}>
                        <div className={styles.formGroup}>
                            <input type="text" id="name" placeholder="Nome" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" id="cpf" placeholder="CPF" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" id="state" placeholder="Estado" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="text" id="adress" placeholder="Endereço" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="email" id="email" placeholder="E-Mail" required/>
                        </div>
                        <div className={styles.formGroup}>
                            <input type="password" id="senha" placeholder="Senha" required/>
                        </div>
                    </form>
                    <div className={styles.formButton}>
                        <Link to={'/'} className={styles.link}>
                            <ButtonCallToAction icon={faArrowRight} text="Criar conta" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;