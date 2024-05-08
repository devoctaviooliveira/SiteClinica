import { Container } from "./styles";
import { CardList } from "../Cards/cardList";
import 'swiper/css';
import 'swiper/css/scrollbar';


export function Slider() {
  return(
    <Container>
      <CardList position={0}/>
    </Container>
  )
}