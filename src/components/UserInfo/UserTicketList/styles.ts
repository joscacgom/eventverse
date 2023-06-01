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
