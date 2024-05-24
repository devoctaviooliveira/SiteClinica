import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer/index"
import { Slider } from '../../components/Slider/index'

import { Container, MainContent } from "./styles";

export function Rates() {
  return (
    <Container>
      <Header />

      <MainContent>
        <h1>Avaliações dos pacientes</h1>
        <Slider></Slider>
      </MainContent>

      <Footer className={Footer}/>
    </Container>
  )
}