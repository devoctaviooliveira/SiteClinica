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

    @media ${breakpoints.desktop_up} {
      padding-top: 14rem;
    }

    @media ${breakpoints.desktop_up} {
      -webkit-animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation: slide-in-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
  }

  .Footer {
    z-index: 3;
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
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 8%;
  
  @media ${breakpoints.desktop_only} {
    gap: 1rem;
  }

  @media ${breakpoints.desktop_up} {
    flex-direction: row;
  }

  > .ContactButton {
    display: flex;
    margin: auto;
    margin-bottom: 1.6rem;

    

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
    padding-top: 4rem;
  }
`

export const SecondSlider = styled.div`

  @media ${breakpoints.desktop_only} {
    
  }
`