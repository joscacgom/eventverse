import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    margin-bottom:5rem;
    gap:1rem;
`

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    gap:1rem;
`

export const TicketActionLabel = styled.label`
  width: auto; 
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #424242;
  font-size: 18px;
  `
type ButtonProps = {
  active: boolean
}
export const Button = styled.button<ButtonProps>`
  width: 205px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  align-content: center;
  margin-left: 10px;
  gap: 10;
  border:none;
  border-radius: 8px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  
  background-color: ${({ active, theme }) => active ? theme.nord.white : theme.nord.black0};
  color: ${({ active, theme }) => active ? theme.nord.black0 : theme.nord.white};

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width: 100%;
    }

`
