import styled from 'styled-components'
import logo from '../logo.png'

/*NAV BAR*/
const NavBarContainer = styled.nav `
    position: relative;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

/*MENU*/
const Menu = styled.ul `
    display: flex;
    justify-content: space-around;
`

/*ITENS DO MENU*/
const ItemMenu = styled.li `
    margin: 0 16px;
    color: hsl(228, 6%, 4%);
    font-weight: 600;
    transition: color .4s;
    list-style: none;
    cursor: pointer;
    &:hover{
       color: hsl(45, 86%, 63%);
    }
`

/*ACOES DA NAVBAR*/
const AcoesNavBar = styled.div `
    display: flex;
    color: hsl(228, 6%, 4%);
    cursor: pointer;
    font-size: 1.25rem;
    column-gap: .5rem;
    align-items: center;
    font-weight: 200;
`
/*BOTAO DE ALTERNAR*/
const Alternar = styled.div `
    display: flex;
    color: hsl(228, 6%, 4%);
    cursor: pointer;
    font-weight: 600;
`

function NavBar() {
    return (
        <NavBarContainer>
            <NomeLogo>
            <LogoImg src={logo} alt="Logo FindingPet"/>FindingPet
            </NomeLogo>
            <Menu>
                <ItemMenu>Início</ItemMenu>
                <ItemMenu>Novidades</ItemMenu>
                <ItemMenu>Adote</ItemMenu>
                <ItemMenu>Cuidados</ItemMenu>
                <ItemMenu>Contato</ItemMenu>
            </Menu>
            <AcoesNavBar>
            <i class="ri-user-line"></i>
            <i class="ri-moon-line"></i>
            </AcoesNavBar>
            <Alternar>
            <i class="ri-menu-line"></i>
            </Alternar>
        </NavBarContainer>
    )
}
export default NavBar