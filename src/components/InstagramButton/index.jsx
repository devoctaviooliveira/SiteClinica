import { Container } from './styles'
import InstagramLogo from '../../assets/InstagramLogo.svg'

export function InstagramButton({className}) {
  return (
    <Container className={className}>
      Instagram
      <img src={InstagramLogo} alt="Logotipo do Instagram" />
    </Container>
  )
}