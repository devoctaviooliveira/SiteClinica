import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  display: flex;
  height: 12rem;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.DETAILS_500};
  padding: 2.8rem 2rem 2.6rem;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;


  .desktopLinks {
    @media (max-width: 1439px) {
      display: none;
    }
  }

  .mobileLink {
    display: flex;
    padding: .8rem 2rem;
    font-size: 1.6rem;
  }

  > a {
    @media (max-width: 832px) {
      display: none;
    }
  }

  @media (min-width: 832px) and (max-width: 1439px) {


    .ContactButton {
      display: flex;
    }
  }

  @media (min-width: 1440px) {
    padding: 2.8rem 12rem;
    

    .ContactButton {
      display: flex;
    }
  }
`

export const HomeButton = styled.button`
  .HomepageLink {
    display: flex;
  
    > img {
      width: 8rem;
    }
  }
`

export const MenuButton = styled.button`
  font-size: 2rem;
  font-style: normal;
  font-family: "Roboto Slab";
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DETAILS_500};
  display: flex;
  gap: .8rem;
  align-items: center;
  position: fixed;
  right: 2rem;
  top: 4.2rem;


  @media (min-width: 1440px) {
    display: none;
  }
`



export const Links = styled.nav`  
  > ul {
    display: flex;
    list-style-type: none;
    border-radius: 1rem;

    .LayoutLink {
      color: ${({ theme }) => theme.COLORS.DETAILS_700};
      font-family: "Roboto Slab";
      font-size: 2rem;
      font-style: normal;
    }

    @media (min-width: 1440px) {
      gap: 4.6rem;
    }

    @media (max-width: 1440px) {
      flex-direction: column;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 140px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    @media (min-width: 1439px) {
      color: ${({ theme }) => theme.COLORS.DETAILS_700};
      font-family: "Roboto Slab";
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
    }
  }
`

export const DropDownMenu = styled.div`
  position: fixed;
  top: 7rem;
  right: 14rem;

  @media (min-width: 1440px) {
    display: none;
  }
`