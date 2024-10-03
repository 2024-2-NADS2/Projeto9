import styled from 'styled-components'
import NavBar from './NavBar'


const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #F2F2F2;
  z-index: 100;
`

function Header() {
    return (
        <HeaderContainer>
        <NavBar/>
        </HeaderContainer>
    )
}

export default Header