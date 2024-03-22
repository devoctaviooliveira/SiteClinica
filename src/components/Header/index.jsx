import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'
import whatsappHeader from '../../assets/whatsappHeader.svg'

import { Container, HomeButton, MenuButton, WhatsAppButton } from "./styles";

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

      <WhatsAppButton>
        <img src={whatsappHeader} alt="Logotipo do whatsapp" />
      </WhatsAppButton>
    </Container>
  )
}