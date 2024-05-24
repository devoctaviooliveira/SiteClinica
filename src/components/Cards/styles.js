import styled from 'styled-components'


export const Container = styled.div`
  max-width: 36rem;
  background-color: white;
  display: flex;
  padding: 1rem;

  @media (max-width: 832px) {
    max-width: 100%;
  }
`

export const MainContent = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;

  @media (max-width: 832px) {
    padding: 1rem 3.6rem;
    justify-content: center;
  }
`
export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;


  > p {
    font-size: 1.6rem;
    font-weight: bold;
  }

  > .stars {
    width: 10.8rem;
    height: 2rem;
  }
`

export const Header = styled.div`
  display: flex;
  gap: .8rem;


  > img {
    width: 4.4rem;
    height: 4.4rem;
  }

  > .googleLogo {
    position: absolute;
    right: 4rem;
    width: 3.4rem;
    height: 3.4rem;

    @media (min-width: 832px) {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      right: 2rem;
      top: 2rem;
    }
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;

  color: #112C55;
  font-family: "Roboto Slab";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 832px) {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: justify;
  }
`