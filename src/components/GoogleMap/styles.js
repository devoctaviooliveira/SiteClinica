import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'


export const Container = styled.div`
  .GoogleMap {
    width: 100%;
    height: 40rem;
    display: flex;
    flex-direction: column;

    @media ${breakpoints.desktop_up} {
      -webkit-animation: fade-in 2.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;
      animation: fade-in 2.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1s both;

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