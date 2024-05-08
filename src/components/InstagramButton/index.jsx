import { Container } from './styles'
import InstagramLogo from '../../assets/InstagramLogo.svg'

export function InstagramButton({className}) {
  return (
    <Container className={className}>
      <a href="https://www.instagram.com/dra.marcelladias/" target='_blank'>
        Instagram
        <img src={InstagramLogo} alt="Logotipo do Instagram" />
      </a>
    </Container>
  )
}