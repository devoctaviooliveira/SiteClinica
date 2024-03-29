import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  display: flex;
  height: 12rem;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.DETAILS_500};
  justify-content: space-between;
  padding: 2.8rem 2rem 2.6rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;

  
  > .ContactButton {
    display: none;
  }

  @media (min-width: 832px) and (max-width: 1439px) {
    .MobileButton {
      display: none;
    }

    .ContactButton {
      display: flex;
    }
  }

  @media (min-width: 1440px) {
    padding: 2.8rem 12rem;
    

    .MobileButton {
      display: none;
    }

    .ContactButton {
      display: flex;
    }
  }
`

export const HomeButton = styled.button`
  display: flex;
  
  > img {
    width: 8rem;
  }
`

export const MenuButton = styled.button`
  font-size: 2rem;
  font-style: normal;
  font-family: "Roboto Slab";
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DETAILS_700};
  display: flex;
  gap: .8rem;
  align-items: center;

  @media (min-width: 1440px) {
    display: none;
  }
`

export const WhatsAppButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
`

export const Links = styled.div`
  display: flex;
  gap: 4.6rem;

  @media (max-width: 1439px) {
    display: none;
  }
`

export const Link = styled.button`
  color: ${({ theme }) => theme.COLORS.DETAILS_700};
  font-family: "Roboto Slab";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
`