import styled from 'styled-components'

export const EventDataContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    height:auto;
    gap:1rem;
    margin-bottom:5rem;
    @media (max-width: 768px) {
        margin-bottom:2rem;
        width:100%;
    }
`
export const EventNameDescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
    @media (max-width: 768px) {
        align-items:center;
    }
`
export const EventDateContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
`
export const EventLocationContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
`
export const EventName = styled.h1`
  width: auto; 
  height: auto; 
  white-space: pre;
  z-index: 1;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 47px;
  @media (max-width: 768px) {
    font-size: 32px;
    }
`
export const EventDescription = styled.p`
  width: auto; 
  height: auto; 
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
}

`
export const EventDateHeader = styled.h2`
  width: auto; 
  height: auto;
  white-space: pre;
  z-index: 1;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 32px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
}
`
export const EventDate = styled.p`
  width: auto; 
  height: auto; 
  white-space: pre;
  z-index: 1;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 18px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
}
`
export const EventLocationHeader = styled.h2`
  width: auto; 
  height: auto; 
  white-space: pre;
  z-index: 1;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 32px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 24px;
}
`
export const EventLocation = styled.p`
  width: auto; 
  height: auto; 
  white-space: pre;
  z-index: 1;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 18px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
}
`
export const EventGoogleMapPic = styled.img`
  width: 455px;
  height: 254px;
  display: block;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  background-image: url(/* image.png */);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
}
`
