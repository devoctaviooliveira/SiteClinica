import { HomepageHeader } from '../../components/HomepageHeader'
import { Footer } from '../../components/Footer/index'
import HomepageImg from '../../assets/HomepageImg.png'
import { ContactButton } from '../../components/ContactButton'
import { InstagramButton } from '../../components/InstagramButton'

import { Container, MobileButtons, MainContent, DesktopContent, Filter } from './styles'

export function Homepage() {
  return (
    <Container>
      <Filter />
      <HomepageHeader />

      <MainContent>
        <h1 className='Mobile_h1'>DR<span>V</span>. M<span>V</span>RCELL<span>V</span> DI<span>V</span>S</h1>

        <DesktopContent>
          <h1 className='Desktop_h1'>DR<span>V</span>. M<span>V</span>RCELL<span>V</span> DI<span>V</span>S</h1>
          <h2>Fisioterapeuta especialista <br />em Dermatofuncional</h2>
          <p>E eu vou cuidar da saúde da sua pele, cabelos e unhas.</p>
          <ContactButton className='Desktop_button'/>
        </DesktopContent>

        
        <MobileButtons>
          <ContactButton className='Buttons'/>
          <InstagramButton className='Buttons'/>
        </MobileButtons>
        <img className='HomepageImg' src={HomepageImg} alt="Foto da Dra. Marcella Dias" />
      </MainContent>

      <Footer className='Footer'/>
    </Container>
  )
}