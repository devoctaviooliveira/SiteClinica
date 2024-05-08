import styled from 'styled-components'


export const Container = styled.div`
  max-width: 36rem;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  padding: 1rem;
  margin: 1rem;
`

export const MainContent = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
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

`