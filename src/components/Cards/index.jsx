import { Container, MainContent, HeaderContent, TextContent , Header} from "./styles";
import profile from '../../assets/profile.png'
import stars from '../../assets/stars.png'
import googleLogo from '../../assets/googleLogo.png'


export function Card({name, comment}) {
  return(
    <Container>
      <MainContent>
        <Header>
          <img src={googleLogo} className="googleLogo" alt="logotipo do google" />
          <img src={profile} alt="ícone representando perfil de usuário" />
          <HeaderContent>
            <p>{name}</p>
            <img className="stars" src={stars} alt="ícones de estrelas douradas" />
          </HeaderContent>
        </Header> 
        
        <TextContent>
          <p>{comment}</p>
        </TextContent>
      </MainContent>
    </Container>
  )
}