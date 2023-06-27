import styled from 'styled-components'

export const EventPreviewCreationMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
    gap: 5rem;
    @media (max-width: 768px) {
        padding: 1rem;
        gap: 0;
        flex-direction: column;
    }
`

export const EventPreviewCreationHeader = styled.div`
  width: auto; 
  height: auto; 
  font-weight: 600;
  font-style: normal;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  color: #000000;
  font-size: 36px;
  margin-bottom: 2rem;
    @media (max-width: 768px) {
        padding-left: 1rem;
        padding-top: 1rem;
        font-size: 24px;
        margin-top: 7rem;
    }
`

export const EventPreviewCreationImage = styled.img`
  width: 800px;
  margin-top: 1rem;
  height: 300px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px;
  border: 1px solid #d4d4d4;
  margin-bottom: 2rem;
  object-fit: cover;
  margin-left: 1rem;
  
    @media (max-width: 768px) {
        width: 100vw;
        margin-top: 0;
        margin-left: 0;
        height: 242px;
        border: none;
        border-radius: 0px;
    }
`

export const EventPreviewCreationName = styled.div`
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

export const EventPreviewCreationNameHeader = styled.div`
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

export const EventPreviewCreationNameText = styled.div`
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

export const EventPreviewCreationDescription = styled.div`
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

export const EventPreviewCreationDescriptionHeader = styled.div`
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

export const EventPreviewCreationDescriptionText = styled.div`
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

export const EventPreviewCreationStartDate = styled.div`
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

export const EventPreviewCreationStartDateHeader = styled.div`
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

export const EventPreviewCreationStartDateText = styled.div`
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

export const EventPreviewCreationEndDate = styled.div`
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

export const EventPreviewCreationEndDateHeader = styled.div`
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

export const EventPreviewCreationEndDateText = styled.div`
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

export const EventPreviewCreationLocation = styled.div`
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

export const EventPreviewCreationLocationHeader = styled.div`
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

export const EventPreviewCreationLocationText = styled.div`
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

export const EventPreviewCreationLocationImage = styled.img`
  width: 258px;
  height: 139px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  object-fit: cover;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`

export const EventPreviewCreationTicket = styled.div`
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

export const EventPreviewCreationTicketHeader = styled.div`
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

export const EventPreviewCreationTicketImage = styled.img`
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

export const EventPreviewCreationTicketName = styled.div`
  width: auto; 
  height: auto; 
  font-family: "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
   @media (max-width: 768px) {
        font-size: 14px;
    }
`
export const EventPreviewCreationFirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-bottom:2rem;
    }
`

export const EventPreviewCreationSecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-bottom:2rem;
    }
`

export const EventPreviewCreationTicketPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

`

export const EventPreviewCreationTicketPrice = styled.div`
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

export const EventPreviewCreationTicketAmount = styled.div`
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
