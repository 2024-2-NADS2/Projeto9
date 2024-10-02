import styled from 'styled-components'
import logo from '../logo.png'

/*CONTAINER PRINCIPAL*/
const FooterMain = styled.div `
    padding-block: 4rem 2rem;
    background-color: #8d8988;
`

/*CONTAINER*/
const FooterContainer = styled.div `
    row-gap: 4rem;
`

/*LOGO*/
const LogoImg = styled.img `
width: 40px;
cursor: pointer;
`

/*LOGO NOME */
const NomeLogo = styled.a `
    display: flex;
    align-items: center;
    font-weight: 600;
    cursor: pointer;
`

/*DESCRCIÇÃO*/
const Descricao = styled.p `
font-weight: normal;
font-size: .938rem;
`
/*CONTEÚDO DO FOOTER*/
const Conteudo = styled.div `
grid-template-columns: repeat(2, max-content);
gap: 4rem 3rem;
`
/*SECTIONS DO FOOTER*/
const Sessoes = styled.div `

`
/*TITULO DO FOOTER*/
const TituloFooter = styled.h3 `
border: 2px solid blue;
     font-size: .938rem;
     color: #F2F2F2;
     margin-bottom: 1rem;
`

/*LINKS*/
const LinksFooter = styled.ul `
border: 2px solid red;
display: grid;
row-gap: .75rem;
`

/*LINK EM SI*/
const ItemLink = styled.li `
    border: 2px solid green;
    color: #F2F2F2;
    transition: color .4s;
    cursor: pointer;
    
`

/*MÍDIAS SOCIAIS*/
const Sociais = styled.div `
    display: flex;
    column-gap: .75rem;
    font-size: 1.5rem;
    transition: color .4s;
    cursor:pointer;
`

function Footer() {
    return(
        <FooterMain>
            <FooterContainer>
            <NomeLogo>
            <LogoImg src={logo} alt="Logo FindingPet"/>FindingPet
            <Descricao>
            FindingPet Lorem ipsum dolorsit amet consectetur adipisicing elit.
            </Descricao>
            </NomeLogo>
            <Conteudo>
                <Sessoes>
                <TituloFooter>EMPRESA</TituloFooter>
                <LinksFooter>
                <ItemLink>Sobre Nós</ItemLink>
                <ItemLink>Animais</ItemLink>
                <ItemLink>ONGS</ItemLink>
                </LinksFooter>

                <TituloFooter>INFORMAÇÕES</TituloFooter>
                <LinksFooter>
                <ItemLink>Blogs e Novidades</ItemLink>
                <ItemLink>Nos contate</ItemLink>
                <ItemLink>FAQs</ItemLink>
                </LinksFooter>

                <TituloFooter>MÍDIAS SOCIAIS</TituloFooter>
                <Sociais>
                <i class="ri-facebook-fill"></i>
                <i class="ri-twitter-x-fill"></i>
                <i class="ri-instagram-fill"></i>
                </Sociais>
                </Sessoes>
            </Conteudo>
            </FooterContainer>
        </FooterMain>
    )
}






export default Footer