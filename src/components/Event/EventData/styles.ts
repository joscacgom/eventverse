import styled from 'styled-components'

export const DataContainer = styled.div`
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

export const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    height:auto;
    gap:0.5rem;
    svg{
        width: 30px;
        height: 30px;
    }    
`

export const DescriptionContainer = styled.div`
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
export const DateContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
    @media (max-width: 768px) {
      padding-left:1rem;
    }
`
export const LocationContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
    @media (max-width: 768px) {
      padding-left:1rem;
    }
`
export const Name = styled.h1`
  width: auto; 
  height: auto; 
  white-space: pre;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 47px;
  @media (max-width: 768px) {
    font-size: 32px;
    width: 100%;
    white-space: normal;
    text-align: center;

  }
`
export const Type = styled.p`
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

export const TypeHeader = styled.h2`
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

export const TypeContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    width:100%;
    height:auto;
    @media (max-width: 768px) {
      padding-left:1rem;
    }
`

export const Description = styled.p`
  width: auto; 
  height: auto; 
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 19px;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
}

`
export const DateHeader = styled.h2`
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
export const Date = styled.p`
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
export const LocationHeader = styled.h2`
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
export const Location = styled.p`
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
export const GoogleMapPic = styled.img`
  width: 455px;
  height: 304px;
  display: block;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  z-index: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left:-0.5rem;
    height: auto;
}
`
