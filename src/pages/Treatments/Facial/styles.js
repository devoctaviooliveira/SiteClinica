import styled from 'styled-components'
import breakpoints from '../../../styles/breakpoints'


export const Container = styled.div`
  height: 100vh;
`

export const Heading = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  height: 14rem;
  align-items: center;
  justify-content: center;
  top: 12rem;
  margin-bottom: 12rem;

  @media ${breakpoints.desktop_up} {
    height: 20rem;
  }

  > h1 {
    font-family: "Roboto Slab";
    font-size: 2.4rem;
    font-style: normal;
    color: white;
    z-index: 1;    
    text-align: center;

    text-shadow: -1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 1px ${({ theme }) => theme.COLORS.DETAILS_700}, 
    1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 -1px ${({ theme }) => theme.COLORS.DETAILS_700};

    @media ${breakpoints.tablet_up} {
      font-size: 3.6rem;
    }

    @media ${breakpoints.desktop_up} {
      font-size: 4.8rem;

      -webkit-animation: fade-in-fwd 2.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in-fwd 2.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

      @-webkit-keyframes fade-in-fwd {
        0% {
          -webkit-transform: translateZ(-80px);
          transform: translateZ(-80px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          opacity: 1;
        }
      }
      @keyframes fade-in-fwd {
        0% {
          -webkit-transform: translateZ(-80px);
          transform: translateZ(-80px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          opacity: 1;
        }
      }
    }
  }

  @media ${breakpoints.tablet_only} {
    h1 span::before,
    h1 span::after {
      content: '';
      display: block;
    }
  }

  > img {
    width: 100%;
    height: 14rem;
    filter: blur(.25rem);
    object-fit: cover;
    position: absolute;

    @media ${breakpoints.desktop_up} {
      height: 20rem;

      -webkit-animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

      @-webkit-keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`

export const MainContent = styled.div`
  padding: 3.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media ${breakpoints.tablet_up} {
    padding: 3.6rem 2.6rem;
  }

  @media ${breakpoints.desktop_up} {
    display: none;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};

    @media ${breakpoints.tablet_up} {
      font-size: 3.2rem;
    }
  }

  > img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
    border-radius: .5rem;
  }

  > p {
    font-family: Poppins;
    font-size: 1.6rem;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
  }
`

export const MainContentDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 4rem;

  @media ${breakpoints.desktop_only} {
    display: none;
  }

  .desktopSection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    margin: auto;
    gap: 3.2rem;
  }

  .textContent, .textContentReverse {
    width: 57.6rem;

    > h1 {
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
    }

    > p {
      font-family: Poppins;
      font-size: 1.6rem;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
    }
  }

  .imgContent, .imgContentReverse {
    width: 57.6rem;
    height: 33.8rem;
  }

  .textContentReverse {
    order: 2;
  }

  .textContent, .imgContent {
    @media ${breakpoints.desktop_up} {
      -webkit-animation: fade-in-left 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in-left 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

      @-webkit-keyframes fade-in-left {
        0% {
          -webkit-transform: translateX(-500px);
          transform: translateX(-500px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
  
      @keyframes fade-in-left {
        0% {
          -webkit-transform: translateX(-500px);
          transform: translateX(-500px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }

  .textContentReverse, .imgContentReverse {
    @media ${breakpoints.desktop_up} {
      -webkit-animation: fade-in-right 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in-right 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

      @-webkit-keyframes fade-in-right {
        0% {
          -webkit-transform: translateX(500px);
          transform: translateX(500px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
  
      @keyframes fade-in-right {
        0% {
          -webkit-transform: translateX(500px);
          transform: translateX(500px);
          opacity: 0;
        }
        100% {
          -webkit-transform: translateX(0);
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
`