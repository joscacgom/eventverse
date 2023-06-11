import styled from 'styled-components'

export const TicketList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:1rem;
  @media (max-width: 768px) {
    width:100%;
    gap:1rem;
    margin-top: 2rem;
  }
  
`
export const HeaderSection = styled.h1`
    font-size: 2.2em;
    text-align: left;
    color: ${({ theme }) => theme.nord.black0};
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    margin-bottom: 1rem;
    margin-top: 1rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
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
  @media (max-width: 768px) {
    padding:1rem;
  }
`
export const InfoHeader = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: ${({ theme }) => theme.nord.black1};
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  @media (max-width: 768px) {
        font-size: 16px;
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
  margin-top:-3rem;
  border: 0px solid #222222;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  width: 350px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.nord.black1};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  outline: none;
  @media (max-width: 768px) {
    width: 100%;
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
  width: 100%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.nord.black1};
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
