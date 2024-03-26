import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Heading = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  height: 14rem;
  align-items: center;
  justify-content: center;


  > h1 {
    font-family: "Roboto Slab";
    font-size: 2.4rem;
    font-style: normal;
    color: white;
    z-index: 1;    
    text-align: center;

    text-shadow: -1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 1px ${({ theme }) => theme.COLORS.DETAILS_700}, 
    1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 -1px ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  h1 span::before,
  h1 span::after {
    content: '';
    display: block;
    width: 100%;
    height: 0;
  }

  > img {
    width: 100%;
    height: 14rem;
    filter: blur(.25rem);
    object-fit: cover;
    position: absolute;
  }
`

export const MainContent = styled.div`
  padding: 3.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  text-align: justify;

  > h1 {
    font-size: 2.4rem;
  }

  > img {
    width: 100%;
    height: 32rem;
    object-fit: cover;
    border-radius: .5rem;
  }

  > p {
    font-family: Poppins;
    font-size: 1.6rem;
  }
`