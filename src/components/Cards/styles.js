import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'


export const Container = styled.div`
  max-width: 36rem;
  background-color: white;
  display: flex;
  padding: 1rem 2rem;

  @media ${breakpoints.desktop_only} {
    max-width: 100%;
    height: 100%;
    border-radius: 2rem;
  }


  @media ${breakpoints.desktop_up} {
    -webkit-animation: flip-in-hor-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	  animation: flip-in-hor-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @-webkit-keyframes flip-in-hor-bottom {
      0% {
        -webkit-transform: rotateX(80deg);
        transform: rotateX(80deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
        opacity: 1;
      }
    }
    @keyframes flip-in-hor-bottom {
      0% {
        -webkit-transform: rotateX(80deg);
        transform: rotateX(80deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0);
        transform: rotateX(0);
        opacity: 1;
      }
    }
  }
`

export const MainContent = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;

  @media ${breakpoints.desktop_only} {
    padding: 1rem 3.6rem;
    justify-content: center;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

  > p {
    font-size: 1.6rem;
    font-weight: bold;
  }

  > .stars {
    width: 10.8rem;
    height: 2rem;
  }
`

export const Header = styled.div`
  display: flex;
  gap: .8rem;

  > img {
    width: 4.4rem;
    height: 4.4rem;
  }

  > .googleLogo {
    position: absolute;
    right: 4rem;
    width: 3.4rem;
    height: 3.4rem;

    @media ${breakpoints.tablet_up} {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      right: 2rem;
      top: 2rem;
    }
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  color: #112C55;
  font-family: "Roboto Slab";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;


  @media ${breakpoints.tablet_only} {
    text-align: justify;
  }
`