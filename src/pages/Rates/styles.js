import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  > h1 {
    padding-top: 14rem;
    display: flex;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
    justify-content: center;

    @media ${breakpoints.mobile_up} {
      font-size: 3.6rem;
    }
  }

  .Footer {
    z-index: 3;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media ${breakpoints.desktop_up} {
    flex-direction: row;
  }

  > .ContactButton {
    display: flex;
    margin: auto;
    margin-bottom: 1.6rem;

    @media ${breakpoints.mobile_up} {
      margin-top: 8rem;
    }

    @media ${breakpoints.desktop_up} {
      display: none;
    }
  }
`

export const GoogleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media ${breakpoints.mobile_up} {
    gap: 8rem;
  }

  @media ${breakpoints.desktop_up} {
    padding-top: 10rem;
    padding-left: 14%;
  }

  > .GoogleCard {
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;

    @media ${breakpoints.desktop_up} {
      display: none;
    }
  }
`

export const Images = styled.div`
  padding-left: 20rem;

  @media ${breakpoints.desktop_only} {
      display: none;
    }

  @media ${breakpoints.desktop_up} {
    .img3 {
      width: 32rem;
      position: absolute;
      right: 26%;
      top: 24rem;
      z-index: 1;
    }

    .img2 {
      width: 22rem;
      position: absolute;
      right: 14%;
      z-index: 2;
    }

    .img1 {
      width: 28rem;
      position: absolute;
      right: 14%;
      top: 48rem;
      z-index: 0;
    }
  }
`