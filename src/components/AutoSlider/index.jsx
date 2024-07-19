import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'
import img4 from '../../assets/img4.jpeg'
import img5 from '../../assets/img5.jpeg'

import { Container } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

export function AutoSlider() {
  return (
    <Container>
      <Swiper
        slidesPerView={2}
        spaceBetween={16}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          1680: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide><img src={img3} className="img1" alt="imagem do consultório" /></SwiperSlide>
        <SwiperSlide><img src={img4} className="img2" alt="imagem do consultório" /></SwiperSlide>
        <SwiperSlide><img src={img1} className="img4" alt="imagem da dra executando um procedimento" /></SwiperSlide>
        <SwiperSlide><img src={img2} className="img5" alt="imagem do consultório" /></SwiperSlide>
      </Swiper>   
    </Container>
  )
}