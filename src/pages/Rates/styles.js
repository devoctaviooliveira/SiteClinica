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
  }

  .Footer {
    z-index: 3;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 8%;


  @media ${breakpoints.desktop_up} {
    flex-direction: row;
  }

  > .ContactButton {
    display: flex;
    margin: auto;
    margin-bottom: 1.6rem;

    @media ${breakpoints.mobile_up} {
      margin-top: 8rem;
    }

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

  > .GoogleCard {
    display: flex;
    justify-content: center;
    margin-top: 1.6rem;

    @media ${breakpoints.desktop_up} {
      display: none;
    }
  }
`

export const SecondSlider = styled.div`

  @media ${breakpoints.desktop_only} {
    display: none;
  }
`