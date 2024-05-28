import { Container, Card } from "./styles";
import stars from '../../assets/stars.png'
import googleLogo from '../../assets/googleLogo.svg'

export function GoogleCard({className}) {
  return (
    <Container className={className}>
      <Card>
        <img src={googleLogo} className="GoogleLogo" alt="" />
        <span>
          <h1>Google</h1>
          <h1>5.0</h1>
        </span>
        <img src={stars} className="Stars" alt="" />
      </Card>
    </Container>
  )
}