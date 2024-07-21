import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'


export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContent = styled.div`
  margin-top: 14rem;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${breakpoints.desktop_up} {
    padding-left: 8rem;
    padding-right: 8rem;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  > span {
    display: flex;
    align-items: center;
    gap: 2rem;

    > p, a {
      font-size: 1.6rem;
      font-family: Poppins;
      font-weight: bold;
      line-height: 120%;
      color: ${({ theme }) => theme.COLORS.DETAILS_700};
    }

    a {
      position: relative;
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: ${({ theme }) => theme.COLORS.DETAILS_500};
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
    }

    a:hover::before {
      transform-origin: left;
      transform: scaleX(1);
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
  }
`