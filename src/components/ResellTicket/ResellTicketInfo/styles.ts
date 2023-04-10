import styled from 'styled-components'

export const ResellTicketInfoMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    gap:2rem;
  }

`

export const ResellTicketInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    }
`

export const ResellTicketInfoNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  margin-top:-5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top:0;
    }
`
export const ResellTicketInfoDateSecondHeader = styled.h3`
  width: auto;
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
    }
`

export const ResellTicketInfoName = styled.h1`
  width: auto; 
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 36px;
  @media (max-width: 768px) {
    font-size: 24px;
    }
  
`

export const ResellTicketInfoOrganizer = styled.p`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #b3b3b3;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
    }

`

export const ResellTicketInfoHeader = styled.h2`
  width: auto; 
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
    }
`

export const ResellTicketInfoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    }
`

export const ResellTicketInfoDescription = styled.p`
  width: auto; 
  height: auto;
  font-family: "Inter", sans-serif;
  color: #b3b3b3;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
    }
`
export const ResellTicketInfoDateSecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: row;

    }
`

export const ResellTicketInfoDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    }
`

export const ResellTicketInfoDate = styled.p`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #b3b3b3;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
    }
`

export const ResellTicketInfoActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 2rem;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top:1rem;
    }
`

export const ResellTicketInfoActionPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    }
`

export const ResellTicketInfoActionPrice = styled.p`
  width: auto;
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #1c1c1c;
  font-size: 26px;
  @media (max-width: 768px) {
    font-size: 16px;
    }
`
export const ResellTicketInfoActionPriceCrypto = styled.p`
  width: auto; 
  height: auto; 
  font-weight: 300;
  font-style: normal;
  font-family: "Inter-Light", "Inter", sans-serif;
  color: #919191;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 12px;
    }
`

export const ResellTicketInfoActionBuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60vw
    }
`

export const ResellTicketInfoDateHeader = styled.h3`
  width: auto; 
  height: auto; 
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 16px;
    }
`

export const ResellTicketInfoActionBuy = styled.button`
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
