import styled from 'styled-components'
import breakpoints from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  height: 12rem;
  padding: 2.8rem 2rem 2.6rem;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  justify-content: space-between;


  .desktopLinks {
    @media ${breakpoints.desktop_only} {
      display: none;
    }
  }

  > .ContactButton {
    display: none;
  }

  @media ${breakpoints.tablet_up} {
    .ContactButton {
      display: none;
    }
  }

  @media ${breakpoints.desktop_up} {
    padding: 2.8rem 8rem;
    border-bottom: solid 1px ${({ theme }) => theme.COLORS.DETAILS_500};
    background-color: white;

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

  @media ${breakpoints.desktop_up} {
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

      @media ${breakpoints.desktop_only} {
        font-size: 1.6rem;
        padding: .8rem;
      }
    }

    @media ${breakpoints.desktop_up} {
      gap: 4.6rem;
    }

    @media ${breakpoints.desktop_only} {
      flex-direction: column;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 140px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    @media ${breakpoints.desktop_up} {
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

  @media ${breakpoints.desktop_up} {
    display: none;
  }  
`