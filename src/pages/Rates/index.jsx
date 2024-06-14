import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index"
import { Slider } from '../../components/Slider/index'
import { GoogleCard } from '../../components/GoogleCard/index'
import { ContactButton } from "../../components/ContactButton";
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

import { Container, MainContent, GoogleContent, Images } from "./styles";

export function Rates() {
  return (
    <Container>
      <Header />
        <h1>Avaliações dos pacientes</h1>
      <MainContent>
        <GoogleContent>
          <GoogleCard className='GoogleCard'/>
          <Slider />
        </GoogleContent>
        <ContactButton className='ContactButton'/>
        <Images>
          <img src={img1} className="img1" alt="imagem da dra executando um procedimento" />
          <img src={img2} className="img2" alt="imagem do consultório" />
          <img src={img3} className="img3" alt="imagem do consultório" />
        </Images>
      </MainContent>
      <Footer className='Footer'/>
    </Container>
  )
}