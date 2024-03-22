import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  display: flex;
  height: 12rem;
  border-bottom: solid 1px ${({ theme }) => theme.COLORS.DETAILS_500};
  justify-content: space-between;
  padding: 2.8rem 2rem 2.6rem;
  align-items: center;
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
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DETAILS_700};
  display: flex;
  gap: .8rem;
`

export const WhatsAppButton = styled.button`
  width: 3.2rem;
  height: 3.2rem;
`