import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'
import whatsappHeader from '../../assets/whatsappHeader.svg'
import { ContactButton } from '../ContactButton/index.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom'


import { Container, HomeButton, MenuButton, WhatsAppButton, Links, DropDownMenu } from "./styles";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <HomeButton>
        <Link className='HomepageLink' to="/"><img src={logoHeader} alt="Logotipo que está no cabeçalho da página" /></Link>
      </HomeButton>

      <DropDownMenu>
        <MenuButton onClick={() => setOpenMenu(!openMenu)}>
          MENU
          <Menu />
        </MenuButton>

        {openMenu && (
          <Links>
            <ul className='mobileLinks'>
              <Link className='LayoutLink' to="/about">Dra. Marcella Dias</Link>
              <Link className='LayoutLink' to="/tratamentosfaciais">Tratamentos</Link>
              <Link className='LayoutLink' to="/about">Avaliações</Link>
              <Link className='LayoutLink' to="/about">Localização</Link>
            </ul>
          </Links>
        )}
      </DropDownMenu>

      <Links>
        <ul className='desktopLinks'>
          <Link className='LayoutLink' to="/about">Dra. Marcella Dias</Link>
          <Link className='LayoutLink' to="/tratamentosfaciais">Tratamentos</Link>
          <Link className='LayoutLink' to="/about">Avaliações</Link>
          <Link className='LayoutLink' to="/about">Localização</Link>
        </ul>
      </Links>

      <WhatsAppButton className='MobileButton'>
        <img src={whatsappHeader} alt="Logotipo do whatsapp" />
      </WhatsAppButton>
      
      <a href="https://web.whatsapp.com/send?phone=551299107-0987" target='_blank'><ContactButton className="ContactButton"/></a>
    </Container>
  )
}