import { Container, MainContent, HeaderContent, TextContent , Header} from "./styles";
import profile from '../../assets/profile.png'
import stars from '../../assets/stars.png'


export function Card({name, comment}) {
  return(
    <Container>
      <MainContent>
        <Header>
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