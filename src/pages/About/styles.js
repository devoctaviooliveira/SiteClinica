import styled from 'styled-components'

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

    @media (min-width: 832px) {
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

  @media (min-width: 1440px) {
    display: none;
    flex-direction: row;
  }
`

export const DesktopContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  padding: 0 12rem;
  flex-grow: 1;

  @media (max-width: 1439px) {
    display: none;
  }
`

export const FirstHalf = styled.div`
  display: flex;
  align-items: center;
  margin-top: 14rem;
`

export const SecondHalf = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;  

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