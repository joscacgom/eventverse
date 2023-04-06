import styled from 'styled-components'

export const HeaderSection = styled.h1`
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #000000;
    font-size: 36px;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 7rem;
        margin-bottom: 0;
    }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10rem;
  gap: 5rem;
  
`
export const InfoHeader = styled.h2`
  width: auto;  
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 28px;
`

export const SearchContainer = styled.div`
  width: 884px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  align-content: center;
  gap: 10;
  border-radius: 9px;
  border: 0px solid #222222;

`

export const SearchInput = styled.input`
  width: 344px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  align-content: center;
  gap: 10;
  border-radius: 9px;
  border: 0px solid #222222;
`

export const SearchButton = styled.button`
  height: 42px;
  width: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
  gap: 10;
  border-radius: 8px;
`

export const TicketListContainer = styled.div`
  width: 884px;
  height: 103px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  align-content: center;
  gap: 10;
  border-radius: 9px;
  border: 0px solid #222222;
    
`

export const TicketListHeader = styled.div`
  width: 1000px;
  height: 47px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #ffffff;
  align-content: center;
  gap: 10rem;
  border-radius: 0px 0px 0px 0px;
  margin-left: 1rem;
  border-color: #a6a6a6;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  p{
    width: auto; 
    height: auto; 
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #333333;
    font-size: 18px;

  }
`

export const TicketList = styled.div`
`

export const TicketItem = styled.div`
  width: 1000px;
  height: 103px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  align-content: center;
  border-radius: 9px;
`
export const TicketMainData = styled.div`
`

export const TicketImage = styled.div`
`

export const TicketInfo = styled.div`
`

export const TicketAmount = styled.div`
`

export const TicketPrice = styled.div`
`

export const TicketStatus = styled.div`
`
export const TicketName = styled.p`
  width: auto; 
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
`

export const TicketPlace = styled.p`
`

export const TicketDate = styled.p`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #ff8957;
  font-size: 12px;
`

export const TicketTime = styled.p`
`
