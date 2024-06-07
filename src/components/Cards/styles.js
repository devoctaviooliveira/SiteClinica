import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'


export const Container = styled.div`
  max-width: 36rem;
  background-color: white;
  display: flex;
  padding: 1rem;

  @media ${breakpoints.desktop_only} {
    max-width: 100%;
    height: 100%;
    border-radius: 2rem;
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