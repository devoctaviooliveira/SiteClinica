import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 1;


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

  @media (min-width: 1440px) {
    display: none;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 14.8rem;

  > .Mobile_h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.DETAILS_500};
    font-family: 'Arual';
    font-weight: 100;

    > span {
      display: inline-block;
      transform: rotate(180deg);      
    }

    @media (min-width: 1440px) {
      display: none;
    }
  }

  > .LogoEscrito {
    width: 44rem;
  }


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
      height: 100%;
      width: auto;
      padding-top: 20rem;
      left: 32rem;
    }
  }
`

export const DesktopContent = styled.div`
  padding-left: 57.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;


  .Desktop_h1 {
    font-family: 'Arual';
    font-weight: 100;
    font-size: calc(5.8rem + 1vw);
    color: ${({ theme }) => theme.COLORS.DETAILS_700};

    > span {
      display: inline-block;
      transform: rotate(180deg);
      vertical-align: -.2rem;
    }
  }

  > h2 {
    font-family: 'Espera';
    font-size: calc(2.8rem + 1vw);
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
  }

  > p {
    font-size: calc(1.6rem + 1vw);
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
    font-family: 'Espera';
  }

  .Desktop_button {
    width: 26rem;
    height: 4.8rem;
    justify-content: center;
  }

  @media (max-width:1439px) {
    display: none;
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