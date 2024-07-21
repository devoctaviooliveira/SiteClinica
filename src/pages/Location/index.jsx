import { Header } from "../../components/Header"
import { Footer } from '../../components/Footer/index'
import pin from '../../assets/pin.svg'
import { GoogleMap } from "../../components/GoogleMap";


import { Container, MainContent, TextContent } from "./style";

export function Location() {

  return (
    <Container>
      <Header />
      <MainContent>
        <TextContent>
          <span>
            <img src={pin} alt="imagem de um ícone de marcação" />
            <a target="_blank" href="https://www.google.com/maps/place/Edif%C3%ADcio+Market+Center/@-23.1942477,-45.8896283,20.25z/data=!4m14!1m7!3m6!1s0x94cc4b2a0f52099f:0x3f3bca9e99bc5265!2sDra.+Marcella+Dias+%7C+Est%C3%A9tica+em+SJC+%7C+P%C3%B3s-operat%C3%B3rio+de+cirurgias+pl%C3%A1sticas+%7C+Harmoniza%C3%A7%C3%A3o+facial!8m2!3d-23.1941521!4d-45.8897003!16s%2Fg%2F11t4w9fjyl!3m5!1s0x94cc4a1353132bc3:0xbfb3fcc3e68bacb2!8m2!3d-23.1942054!4d-45.8898121!16s%2Fg%2F1vm7cl11?hl=pt-BR&entry=ttu">Edifício Market Center</a>
          </span>
          
          <span>
            <img src={pin} alt="imagem de um ícone de marcação" />
            <a target="_blank" href="https://www.google.com/maps/place/Edif%C3%ADcio+Market+Center/@-23.1942477,-45.8896283,20.25z/data=!4m14!1m7!3m6!1s0x94cc4b2a0f52099f:0x3f3bca9e99bc5265!2sDra.+Marcella+Dias+%7C+Est%C3%A9tica+em+SJC+%7C+P%C3%B3s-operat%C3%B3rio+de+cirurgias+pl%C3%A1sticas+%7C+Harmoniza%C3%A7%C3%A3o+facial!8m2!3d-23.1941521!4d-45.8897003!16s%2Fg%2F11t4w9fjyl!3m5!1s0x94cc4a1353132bc3:0xbfb3fcc3e68bacb2!8m2!3d-23.1942054!4d-45.8898121!16s%2Fg%2F1vm7cl11?hl=pt-BR&entry=ttu">Av. Engenheiro Francisco José Longo, 149 - Jardim São Dimas, São José dos Campos - SP, 12245-000</a>
          </span>
        </TextContent>

        <GoogleMap />
      </MainContent>
      <Footer />
    </Container>
  )
}