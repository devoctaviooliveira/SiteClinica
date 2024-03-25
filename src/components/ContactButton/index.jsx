import { Container } from './styles'
import WhatsAppLogo from '../../assets/WhatsAppLogoWhite.svg'

export function ContactButton({className}) {
  return (
    <Container className={className}>
      Agendar consulta
      <img src={WhatsAppLogo} alt="Logotipo do WhatsApp" />
    </Container>
  )
}