import styled from 'styled-components'

export const HeaderSection = styled.h1`
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #000000;
    font-size: 36px;
    margin-bottom: 1rem;
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
  padding-bottom: 10rem;
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
  @media (max-width: 768px) {
        font-size: 16px;
        margin-left:18rem;
        margin-top: 2rem;
        margin-bottom:-3rem;
        text-align: center;
    }
`

export const SearchContainer = styled.div`
  width: 550px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10;
  border-radius: 9px;
  border: 0px solid #222222;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 17rem;
  }
`

export const SearchInput = styled.input`
  width: 344px;
  height: 42px;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  border: 1px solid ${({ theme }) => theme.nord.gray2};
  border-radius: 5px;
  outline: none;
  @media (max-width: 768px) {
    width: 30%;
    margin-left: 2.5rem;
  }

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
  margin-left: 10px;
  gap: 10;
  border:none;
  color: ${({ theme }) => theme.nord.white};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
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
  @media (max-width: 768px) {
    margin-top:-2rem;
  }
    
    
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
  gap:10rem;
  border-radius: 0px 0px 0px 0px;
  margin-left: 1rem;
  margin-top: 3rem;
  border-color: #a6a6a6;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  @media (max-width: 768px) {
    display: none;
  }
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
