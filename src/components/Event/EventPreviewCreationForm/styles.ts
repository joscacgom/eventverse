import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 5rem;
    @media (max-width: 768px) {
        padding: 0;
        gap: 0;
        flex-direction: column;
    }
`

export const Header = styled.div`
  width: auto; 
  height: auto; 
  font-weight: 600;
  font-style: normal;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  color: #000000;
  font-size: 36px;
  margin-bottom: 2rem;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 7rem;
    }
`

export const Image = styled.img`
  width: 1150px;
  height: 300px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  border: 1px solid #d4d4d4;
  margin-bottom: 2rem;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        margin-top: 1rem;
    }
`

export const Name = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }

`

export const NameHeader = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const NameText = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }
`

export const DescriptionHeader = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const DescriptionText = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
  @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const StartDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }
`

export const StartDateHeader = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const StartDateText = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const EndDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }
`

export const EndDateHeader = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const EndDateText = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const Location = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }

`

export const LocationHeader = styled.div`
  width: auto; 
  height: auto;
  white-space: pre;
  z-index: 1;
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
  @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const LocationText = styled.div`
  width: auto; 
  height: auto;
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const LocationImage = styled.img`
  width: 258px;
  height: 139px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`

export const Ticket = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
        align-items: center;

    }
`

export const TicketHeader = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 24px;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const TicketImage = styled.img`
  width: 184px;
  height: 138px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
    @media (max-width: 768px) {
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }
  
`

export const TicketName = styled.div`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
   @media (max-width: 768px) {
        font-size: 14px;
    }
`
export const FirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-bottom:2rem;
    }
`

export const SecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-bottom:2rem;
    }
`

export const TicketPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

`

export const TicketPrice = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const TicketAmount = styled.div`
  width: auto; 
  height: auto; 
  opacity: 0.5;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
    @media (max-width: 768px) {
        font-size: 14px;
    }
`
