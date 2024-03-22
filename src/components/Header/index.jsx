import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'

import { Container, HomeButton, MenuButton } from "./styles";

export function Header() {
  return (
    <Container>
      <HomeButton>
        <img src={logoHeader} alt="Logotipo que está no cabeçalho da página" />
      </HomeButton>

      <MenuButton>
        MENU
        <Menu />
      </MenuButton>
    </Container>
  )
}