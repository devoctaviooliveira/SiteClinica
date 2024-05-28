import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index"
import { Slider } from '../../components/Slider/index'
import { FeedbackSlider } from "../../components/FeedbackSlider/index";
import { GoogleCard } from '../../components/GoogleCard/index'
import { ContactButton } from "../../components/ContactButton";

import { Container, MainContent, GoogleContent } from "./styles";

export function Rates() {
  return (
    <Container>
      <Header />

      <MainContent>
        <h1>Avaliações dos pacientes</h1>
        <GoogleContent>
          <GoogleCard className='GoogleCard'/>
          <Slider />
        </GoogleContent>
        <ContactButton className='ContactButton'/>
        <FeedbackSlider />
      </MainContent>
      <Footer className={Footer}/>
    </Container>
  )
}