import styled from 'styled-components'


export const Container = styled.div`
  display: flex;

  .MobileSwiper {
    display: flex;

    @media (min-width: 832px) {
      display: none;
    }
  }

  .DesktopSwiper {
    max-width: 36rem;
    height: 100%;

    @media (max-width: 832px) {
      display: none;
    }
  }

  .swiper-slide {
    border-radius: 2rem;
  }
`