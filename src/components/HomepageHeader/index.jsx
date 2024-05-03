import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'
import { ContactButton } from '../ContactButton/index.jsx'
import { useState } from 'react';


import { Container, HomeButton, MenuButton, Links, Link, DropDownMenu } from "./styles.js";

export function HomepageHeader() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Container>
      <HomeButton>
        <img src={logoHeader} alt="Logotipo que está no cabeçalho da página" />
      </HomeButton>

      <DropDownMenu>
        <MenuButton onClick={() => setOpenMenu(!openMenu)}>
          MENU
          <Menu />
        </MenuButton>

        {openMenu && (
          <Links>
            <ul className='mobileLinks'>
              <li><Link className='mobileLink' href=''>Dra Marcella Dias</Link></li>
              <li><Link className='mobileLink' href=''>Tratamentos</Link></li>
              <li><Link className='mobileLink' href=''>Avaliações</Link></li>
              <li><Link className='mobileLink' href=''>Localização</Link></li>
            </ul>
          </Links>
        )}
      </DropDownMenu>

      <Links>
        <ul className='desktopLinks'>
          <li><Link className='desktopLink' href=''>Dra Marcella Dias</Link></li>
          <li><Link className='desktopLink' href=''>Tratamentos</Link></li>
          <li><Link className='desktopLink' href=''>Avaliações</Link></li>
          <li><Link className='desktopLink' href=''>Localização</Link></li>
        </ul>
      </Links>
      
      <ContactButton className="ContactButton"/>
    </Container>
  )
}