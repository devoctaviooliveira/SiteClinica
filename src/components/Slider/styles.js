import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
  

  .swiper {
    max-width: 36rem;
    height: 100%;
  }

  .swiper-slide {
    border-radius: 2rem;
  }

  .swiper-slide:nth-child(1n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }

  .swiper-slide:nth-child(2n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  .swiper-slide:nth-child(3n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }

  .swiper-slide:nth-child(4n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  .swiper-slide:nth-child(5n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }

  .swiper-slide:nth-child(6n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  .swiper-slide:nth-child(7n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }

  .swiper-slide:nth-child(8n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  .swiper-slide:nth-child(9n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
  }

  .swiper-slide:nth-child(10n) {
    background-color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }
`