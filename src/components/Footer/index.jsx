import { Container } from "./styles";

export function Footer({className}) {
  return (
    <Container className={className}>
      <p>Fisioterapia Dermatofuncional e Estética Integrada</p>
      <p>São José dos Campos - SP</p>
      <a href="https://www.instagram.com/dra.marcelladias/" target="_blank">@dra.marcelladias</a>
    </Container>
  )
}