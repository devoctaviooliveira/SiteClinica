import { Header } from '../../components/Header/index'
import { Footer } from '../../components/Footer/index'
import MobileImg from '../../assets/HomepageMobileImg.png' 
import { ContactButton } from '../../components/ContactButton'
import { InstagramButton } from '../../components/InstagramButton'

import { Container, MobileButtons } from './styles'

export function Homepage() {
  return (
    <Container>
      <Header />
      <h1>Dra. Marcella Dias</h1>
      <img src={MobileImg} alt="Foto da Dra. Marcella Dias" />

      <MobileButtons>
        <ContactButton className='Buttons'/>
        <InstagramButton className='Buttons'/>
      </MobileButtons>

      <Footer className="Footer"/>
    </Container>
  )
}