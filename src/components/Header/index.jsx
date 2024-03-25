import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'
import whatsappHeader from '../../assets/whatsappHeader.svg'
import { ContactButton } from '../ContactButton/index.jsx'

import { Container, HomeButton, MenuButton, WhatsAppButton, Links, Link } from "./styles";

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

      <Links>
        <Link>Dra Marcella Dias</Link>
        <Link>Tratamentos</Link>
        <Link>Avaliações</Link>
        <Link>Localização</Link>
      </Links>

      <WhatsAppButton className='MobileButton'>
        <img src={whatsappHeader} alt="Logotipo do whatsapp" />
      </WhatsAppButton>
      
      <ContactButton className="ContactButton"/>
    </Container>
  )
}