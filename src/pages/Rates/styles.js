import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContent = styled.div`
  padding-top: 14rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > h1 {
    display: flex;
    font-family: Poppins;
    color: ${({ theme }) => theme.COLORS.TEXT_STANDARD};
    justify-content: center;
  }

  > .ContactButton {
    display: flex;
    margin: auto;

    @media ${breakpoints.tablet_up} {
      display: none;
    }
  }
`

export const GoogleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  > .GoogleCard {
    display: flex;
    justify-content: center;

    @media ${breakpoints.tablet_up} {
      display: none;
    }
  }
`