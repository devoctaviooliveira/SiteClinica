import { Container } from "./styles";
import { CardList } from "../Cards/cardList";
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Pagination } from 'swiper/modules';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';



export function Slider() {
  return(
    <Container>
      
      <Swiper  effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        <SwiperSlide className="SwiperSlide"><CardList position={0}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={1}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={2}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={3}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={4}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={5}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={6}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={7}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={8}/></SwiperSlide>
      </Swiper>
    </Container>
  )
}