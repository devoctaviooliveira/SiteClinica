import styled from 'styled-components'


export const Container = styled.div`
  display: flex;
`

export const Card = styled.div`
  padding: 2.2rem 2.8rem 4.2rem;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .GoogleLogo {
    width: 4rem;
    height: 4rem;
  }


  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1.6rem;

    > h1 {
      color: #112C55;
      font-family: "Roboto Slab";
      font-size: 2.4rem;
    }
  }
`
