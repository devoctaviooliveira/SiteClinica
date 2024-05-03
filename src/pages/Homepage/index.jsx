import { HomepageHeader } from '../../components/HomepageHeader'
import { Footer } from '../../components/Footer/index'
import HomepageImg from '../../assets/HomepageImg.png'
import { ContactButton } from '../../components/ContactButton'
import { InstagramButton } from '../../components/InstagramButton'

import { Container, MobileButtons, MainContent, Filter } from './styles'

export function Homepage() {
  return (
    <Container>
      <Filter />
      <HomepageHeader />

      <MainContent>
        <h1>DR<span>V</span>. M<span>V</span>RCELL<span>V</span> DI<span>V</span>S</h1>

        
        <MobileButtons>
          <ContactButton className='Buttons'/>
          <InstagramButton className='Buttons'/>
        </MobileButtons>
      </MainContent>

      <img className='HomepageImg' src={HomepageImg} alt="Foto da Dra. Marcella Dias" />
      <Footer className='Footer'/>
    </Container>
  )
}