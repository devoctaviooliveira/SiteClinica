import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.tablet_only} {
    position: fixed;
  }

  > .Footer {
    @media ${breakpoints.desktop_only} {
      display: none;
    }

    @media ${breakpoints.desktop_up} {
      @keyframes slide-in-bot {
        from {
          transform: translateY(var(--startY));
        }
      }

      --startY: 100%;
      animation: slide-in-bot 1s;

      .ContactButton {
        display: flex;
      }
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
  position: absolute;
  bottom: 12rem;

  @media ${breakpoints.desktop_up} {
    display: none;
  }

`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  > .Mobile_h1 {
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.DETAILS_500};
    font-family: "Cormorant Garamond", serif;
    font-weight: 300;
    position: relative;
    top: 14.6rem;

    @media ${breakpoints.desktop_up} {
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
    position: fixed;
    left: 50%;
    transform: translate(-50%);

    @media ${breakpoints.tablet_up} {
      width: 78%;
    }

    @media ${breakpoints.desktop_up} {
      position: absolute;
      bottom: 8rem;
      height: 100%;
      width: auto;
      padding-top: 20rem;
      left: 32rem;

      
      -webkit-animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	    animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


      @keyframes slide-in-left {
        0% {
          -webkit-transform: translateX(-1000px);
          transform: translateX(-1000px);
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`

export const DesktopContent = styled.div`
  padding-left: 57.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;


  -webkit-animation: slide-in-left 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: slide-in-left 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


  .Desktop_h1 {
    font-family: "Cormorant Garamond", serif;
    font-weight: 300;
    font-size: calc(5.8rem + 1vw);
    color: ${({ theme }) => theme.COLORS.DETAILS_700};
    margin-top: 14.8rem;

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

  @media ${breakpoints.desktop_only} {
    display: none;
  }
`

export const Filter = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #040406;
  opacity: 66%;
  pointer-events: none;


  @media ${breakpoints.desktop_up} {
    display: none;
  }
`