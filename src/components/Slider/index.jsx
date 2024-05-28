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
  function renderCardList(position) {
    return (
      <SwiperSlide className="SwiperSlide">
        <CardList position={position} />
      </SwiperSlide>
    );
  }
  
  function renderAllCardLists() {
    const numSlides = 25;
    const slides = [];
  
    for (let i = 0; i < numSlides; i++) {
      slides.push(renderCardList(i));
    }
  
    return (
      <Swiper effect={'cards'} grabCursor={true} navigation={true} modules={[EffectCards, Navigation]} className="DesktopSwiper">
        {slides}
      </Swiper>
    );
  }

  function renderAllMobileSlides() {
    const numMobileSlides = 25;
    const mobileSlides = [];

    for (let i = 0; i < numMobileSlides; i++) {
      mobileSlides.push(renderCardList(i));
    }

    return (
      <Swiper
        pagination={{
          dynamicBullets: true,
          grabCursor: true,
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        modules={[Pagination]}
        className="MobileSwiper"
      >
        {mobileSlides}
      </Swiper>
    );
  }

  return(
    <Container>
      {renderAllCardLists()}
      {renderAllMobileSlides()}
    </Container>
  )
}