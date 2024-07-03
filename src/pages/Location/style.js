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
      line-height: 120%;
      color: ${({ theme }) => theme.COLORS.DETAILS_700};
    }

    a:hover {
      font-weight: bold;
    }
  }
`