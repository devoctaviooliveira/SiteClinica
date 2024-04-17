import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 14.8rem;
    font-family: "Roboto Slab";
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }
  
  > img {
    width: 22rem;
    margin-top: 3.2rem;
  }
`
export const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6.4rem;

  > .Buttons {
    width: 24rem;
    height: 4.8rem;
    justify-content: center;
  }
`

export const MainContent = styled.div`
  
`

