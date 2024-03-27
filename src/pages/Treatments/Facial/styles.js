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
  top: 12rem;
  margin-bottom: 12rem;

  @media (min-width: 1439px) {
    height: 20rem;
  }


  > h1 {
    font-family: "Roboto Slab";
    font-size: 2.4rem;
    font-style: normal;
    color: white;
    z-index: 1;    
    text-align: center;

    text-shadow: -1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 1px ${({ theme }) => theme.COLORS.DETAILS_700}, 
    1px 0 ${({ theme }) => theme.COLORS.DETAILS_700}, 0 -1px ${({ theme }) => theme.COLORS.DETAILS_700};

    @media (min-width: 832px) {
      font-size: 3.6rem;
    }

    @media (min-width: 1439px) {
      font-size: 4.8rem;
    }
  }

  @media (max-width: 832px) {
    h1 span::before,
    h1 span::after {
      content: '';
      display: block;
    }
  }

  > img {
    width: 100%;
    height: 14rem;
    filter: blur(.25rem);
    object-fit: cover;
    position: absolute;


    @media (min-width: 1439px) {
      height: 20rem;
    }
  }
`

export const MainContent = styled.div`
  padding: 3.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 832px) {
    padding: 3.6rem 16rem;
  }

  @media (min-width: 1440px) {
    display: none;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  > h1 {
    font-size: 2.4rem;
    text-align: center;

    @media (min-width: 832px) {
      font-size: 3.2rem;
    }
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
    text-align: justify;
  }
`

export const MainContentDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem 12rem;

  @media (max-width: 1439px) {
    display: none;
  }

  .desktopSection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    margin: auto;
    gap: 3.2rem;
  }

  .textContent, .textContentReverse {
    width: 57.6rem;

    > h1 {
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
      text-align: center;
    }

    > p {
      font-family: Poppins;
      font-size: 1.6rem;
      text-align: justify;
    }
  }

  .imgContent, .imgContentReverse {
    width: 57.6rem;
    height: 33.8rem;
  }

  .textContentReverse {
    order: 2;
  }
`