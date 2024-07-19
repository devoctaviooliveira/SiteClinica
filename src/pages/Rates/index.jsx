import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index"
import { Slider } from '../../components/Slider/index'
import { GoogleCard } from '../../components/GoogleCard/index'
import { ContactButton } from "../../components/ContactButton";
import { AutoSlider } from "../../components/AutoSlider";

import { Container, MainContent, GoogleContent, SecondSlider } from "./styles";

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
        
        <SecondSlider>
          <AutoSlider></AutoSlider>
        </SecondSlider>
      </MainContent>
      <Footer className='Footer'/>
    </Container>
  )
}