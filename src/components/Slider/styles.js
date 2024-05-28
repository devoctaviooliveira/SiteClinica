import styled from 'styled-components'


export const Container = styled.div`
  @media (max-width: 832px) {
    display: flex;
  }

  .MobileSwiper {
    display: flex;

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
    }

    @media (min-width: 832px) {
      display: none;
    }
  }

  .DesktopSwiper {
    max-width: 36rem;

    @media (max-width: 832px) {
      display: none;
    }
  }

  .swiper-slide {
    border-radius: 2rem;
  }

  .swiper-button-next {
    padding-left: 3rem;
  }

  .swiper-button-prev {
    padding-right: 3rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 3rem;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }
`
