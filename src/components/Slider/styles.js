import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  @media ${breakpoints.desktop_only} {
    display: flex;
  }

  .MobileSwiper {
    display: flex;

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
    }

    @media ${breakpoints.desktop_up} {
      display: none;
    }
  }

  .DesktopSwiper {
    max-width: 36rem;

    @media ${breakpoints.desktop_only} {
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
    font-size: 4rem;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }



  @media ${breakpoints.desktop_up} {
    -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`
