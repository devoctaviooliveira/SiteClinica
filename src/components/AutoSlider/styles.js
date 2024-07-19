import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  
  .swiper {
    height: 100%;
    width: 66rem;
    padding: 1rem;

    @media (min-width: 1680px) {
      width: 100rem;
    }

    
    


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

    @media ${breakpoints.desktop_up} {
      -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
      .img2 {
        -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
        animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both;
      }
  
      .img4 {
        -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
        animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
      }
    }

  }

  .swiper-slide {
    
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 32rem;
    height: 46rem;
    object-fit: cover;
    border-radius: 2rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DETAILS_700};
  }
`