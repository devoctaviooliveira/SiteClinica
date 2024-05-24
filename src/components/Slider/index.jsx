import { Container } from "./styles";
import { CardList } from "../Cards/cardList";
import 'swiper/css';
import 'swiper/css/effect-cards';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export function Slider() {
  return(
    <Container>
      <Swiper effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="DesktopSwiper">
        <SwiperSlide className="SwiperSlide"><CardList position={0}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={1}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={2}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={3}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={4}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={5}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={6}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={7}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={8}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={9}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={10}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={11}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={12}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={13}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={14}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={15}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={16}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={17}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={18}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={19}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={20}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={21}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={22}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={23}/></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><CardList position={24}/></SwiperSlide>
      </Swiper>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="MobileSwiper"
        >
        <SwiperSlide className="MobileSwiper"><CardList position={0} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={1} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={2} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={3} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={4} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={5} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={6} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={7} /></SwiperSlide>
        <SwiperSlide className="MobileSwiper"><CardList position={8} /></SwiperSlide>
      </Swiper>


    </Container>
  )
}