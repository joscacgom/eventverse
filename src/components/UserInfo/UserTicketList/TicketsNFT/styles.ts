import styled from 'styled-components'

export const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:1rem;
  @media (max-width: 768px) {
    width:45%;
    gap:1rem;
    margin-top: 2rem;
  }
  
`

export const TicketItem = styled.div`
  width: 1050px;
  height: 105px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin-top: 1rem;
  align-content: center;
  border-radius: 9px;
  cursor: pointer;
  border: 1px solid #222;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top:0;
    gap: 0;    
  }
`
export const TicketMainData = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0;
  }

  
`

export const TicketImage = styled.img`
  width: 97px;
  height: 103px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;

`

export const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  margin-left: 1rem;

`

export const TicketAmount = styled.div`
  width: auto;
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 14px;
  }
`

export const TicketPrice = styled.div`
  width: auto; 
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: 1rem;
    font-size: 14px;
  }
`

export const TicketStatus = styled.div`
  width: auto; 
  height: auto; 
  font-weight: 700;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #539362;
  margin-right: 1rem;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 5rem;
    margin-left:-2rem;
    margin-right: 0.5rem;

  }
  
`
export const TicketName = styled.p`
  width: auto; 
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const TicketPlace = styled.p`
  width: auto; 
  height: auto; 
  white-space: pre;
  font-family: "Inter", sans-serif;
  color: #8c8c8c;
  font-size: 12px;
`

export const TicketDate = styled.p`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #ff8957;
  font-size: 12px;
`

export const TicketTime = styled.p`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #ff9466;
  font-size: 12px;
`
