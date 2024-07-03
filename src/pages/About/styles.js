import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .Footer {
    margin-top: 2rem;
  }

  .firstTitle {
    margin-top: 14rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-family: Roboto Slab;
    color: ${({ theme }) => theme.COLORS.DETAILS_700};
    font-size: 2.4rem;

    @media ${breakpoints.tablet_up} {
      font-size: 4.2rem;
    }
  }
`

export const MobileContent = styled.div`
  padding: 2rem 3.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 2.4rem;

  p {
    font-family: Poppins;
    text-align: justify;
    font-size: 1.6rem;
  }

  @media ${breakpoints.desktop_up} {
    display: none;
    flex-direction: row;
  }
`

export const DesktopContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  padding: 0 8rem;
  flex-grow: 1;

  @media ${breakpoints.desktop_only} {
    display: none;
  }
`

export const FirstHalf = styled.div`
  position: fixed;
  padding-top: 12rem;
  z-index: -1;
`

export const SecondHalf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;  
  padding-left: 42rem;
  justify-content: center;

  h1 {
    display: flex;
    align-items: start;
  }

  p {
    font-family: Poppins;
    text-align: justify;
    font-size: 1.6rem;
  }
`