import { Container } from './styles'
import WhatsAppLogo from '../../assets/WhatsAppLogoWhite.svg'

export function ContactButton({className}) {
  return (
    <Container className={className}>
      <a href="https://wa.me/message/A2TZX36N4GELP1" target='_blank'>
        Agendar consulta
        <img src={WhatsAppLogo} alt="Logotipo do WhatsApp" />
      </a>
    </Container>
  )
}