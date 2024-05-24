import { Menu } from 'lucide-react';
import logoHeader from '../../assets/logoHeader.png'
import { ContactButton } from '../ContactButton/index.jsx'
import { useState } from 'react';
import { Link } from 'react-router-dom'


import { Container, HomeButton, MenuButton, Links, DropDownMenu } from "./styles";

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
              <Link className='LayoutLink' to="/avaliacoes">Avaliações</Link>
              <Link className='LayoutLink' to="/location">Localização</Link>
            </ul>
          </Links>
        )}
      </DropDownMenu>

      <Links>
        <ul className='desktopLinks'>
          <Link className='LayoutLink' to="/about">Dra. Marcella Dias</Link>
          <Link className='LayoutLink' to="/tratamentosfaciais">Tratamentos</Link>
          <Link className='LayoutLink' to="/avaliacoes">Avaliações</Link>
          <Link className='LayoutLink' to="/about">Localização</Link>
        </ul>
      </Links>

      
      <a href="https://web.whatsapp.com/send?phone=551299107-0987" target='_blank'><ContactButton className="ContactButton"/></a>
    </Container>
  )
}