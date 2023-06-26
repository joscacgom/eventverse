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
export const TicketSpan = styled.span`
  width: auto;
  height: auto;
  font-weight: 400;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #424242;
  font-size: 12px;
  margin-top: -0.5rem;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const Buttons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    gap:1rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-right: 0.5rem;
    }
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
export const TicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  
  padding: 1em;
  align-content: center;
  
  gap: 1rem;
  width: 410px;
  height: auto;
  
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.nord.gray3};
  background-color: ${({ theme }) => theme.nord.white};

  p{
    font-weight: 400;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: ${({ theme }) => theme.nord.black0};
    font-size: 18px;

  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TicketInfo = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    width:100%;
    @media (max-width: 768px) {
       gap:7rem;
    }
`

export const TicketButton = styled.button`
  width: 378px; 
  height: 49px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
  margin-left: 10px;
  gap: 10;
  border:none;
  color: ${({ theme }) => theme.nord.white};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 18px;
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width: 80%;
    }
`

export const TicketActionPrice = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black0};
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  small{
      font-weight: 300;
      font-style: normal;
      font-family: "Inter-Light", "Inter", sans-serif;
      color: #919191;
      font-size: 15px;
    }

`

export const TicketActionAmount = styled.input`
  width: 50px; 
  height: auto; 
  font-weight: 400;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #424242;
  font-size: 26px;
  @media (max-width: 768px) {
    font-size: 18px;
    }
`

export const TicketImage = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
`

export const TicketAction = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
    @media (max-width: 768px) {
    }
`
