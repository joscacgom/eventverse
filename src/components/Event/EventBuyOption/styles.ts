import styled from 'styled-components'

export const EventBuyOptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    margin-bottom:5rem;
    gap:1rem;
`

export const EventBuyOptionButtons = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width:100%;
    height:auto;
    gap:1rem;
`

export const EventBuyOptionButton = styled.button`
  width: 205px;
  height: 40px;
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
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width: 100%;
    }

`

export const EventBuyOptionTicket = styled.div`
  width: 410px;
  height: 247px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1rem;
  border-radius: 9px;
  border: 1px solid #bdbdbd;
  @media (max-width: 768px) {
    width: 100%;
    }
`

export const EventBuyOptionTicketInfo = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:10rem;
    @media (max-width: 768px) {
       gap:7rem;
    }
`

export const EventBuyOptionTicketButton = styled.button`
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

export const EventBuyOptionTicketActionPrice = styled.p`
  width: auto; 
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #424242;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
    }
`

export const EventBuyOptionTicketActionAmount = styled.input`
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

export const EventBuyOptionTicketImage = styled.img`
  width: 141px;
  height: 138px;
  display: block;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
  @media (max-width: 768px) {
   
    }
`

export const EventBuyOptionTicketAction = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:1rem;
    @media (max-width: 768px) {
    }


`
