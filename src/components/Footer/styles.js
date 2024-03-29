import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 10rem;
  border-top: solid 1px ${({ theme }) => theme.COLORS.DETAILS_500};
  text-align: center;
  justify-content: center;
  padding: 1.2rem 0;

  > p, a {
    font-family: Poppins;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.DETAILS_700};
  }

  > a {
    font-weight: bold;
  }
`