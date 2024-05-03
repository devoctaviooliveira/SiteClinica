import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 1;

  > .HomepageImg {
    z-index: -2;
    width: 100%;
    bottom: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 78%;
    }

    @media (min-width: 1439px) {
      position: absolute;
      bottom: 8rem;
      width: 52rem;
      left: 26rem;
    }
  }

  > .Footer {
    @media (max-width: 1439px) {
      display: none;
    }
  }

  @font-face {
    font-family: 'Arual';
    font-family: 'Espera';
    font-style: normal;
    font-weight: normal;
    src: local('Arual'), url('Arual.woff') format('woff');
    src: local('Espera-Regular'), url('Espera-Regular.ttf') format('ttf');
  }
`
export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 40rem;

  > .Buttons {
    width: 28rem;
    height: 4.8rem;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14.8rem;

  > h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.DETAILS_500};
    font-family: 'Arual';
    font-weight: 100;

    > span {
      display: inline-block;
      transform: rotate(180deg);      
    }

    @media (min-width: 1440px) {
      font-size: 6rem;
      color: ${({ theme }) => theme.COLORS.DETAILS_700};
    }
  }

  > p {
    color: white;
    font-size: 1.4rem;
  }

  > .LogoEscrito {
    width: 44rem;
  }
  
  > img {
    width: 22rem;
    margin-top: 3.2rem;
  }
`

export const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #040406;
  opacity: 66%;
  pointer-events: none;
  z-index: -1;

  @media (min-width: 1440px) {
    display: none;
  }
`