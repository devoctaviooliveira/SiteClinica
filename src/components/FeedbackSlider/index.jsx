import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import feedbackImg1 from '../../assets/feedback1.jpg'
import feedbackImg2 from '../../assets/feedback2.jpg'
import feedbackImg3 from '../../assets/feedback3.jpg'
import feedbackImg4 from '../../assets/feedback4.jpg'
import feedbackImg5 from '../../assets/feedback5.jpg'
import feedbackImg6 from '../../assets/feedback6.jpg'
import feedbackImg7 from '../../assets/feedback7.jpg'

import { Container } from './styles'
import { EffectCards, Navigation } from 'swiper/modules';


export function FeedbackSlider() {
  return (
    <Container>
      <Swiper effect={'cards'}
        grabCursor={true}
        navigation={true}
        modules={[EffectCards, Navigation]}
        className="DesktopSwiper">
        <SwiperSlide ><img src={feedbackImg1} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg2} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg3} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg4} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg5} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg6} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
        <SwiperSlide ><img src={feedbackImg7} alt="Imagem de um feedback de pacientes" className='feedbackImg'/></SwiperSlide>
      </Swiper>
    </Container>
  )
}