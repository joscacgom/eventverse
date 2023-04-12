import styled from 'styled-components'

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 20px;
    & > *:first-child {
        margin: 0 auto;
    }
`
export const ContactInfoTitle = styled.h1`
    width: auto; 
    height: auto; 
    font-weight: 600;
    font-style: normal;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    color: #000000;
    font-size: 36px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const ContactInfoText = styled.div`
    margin-bottom: 15px;
    font-size: 1.2rem;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        text-align: justify;
    }
`

export const ContactInfoParagraph = styled.p`
    margin-bottom: 15px;
    font-size: 1.2rem;
`

export const ContactInfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     & > *:first-child {
        margin-bottom: 15px;
    }

`

export const ContactInfoBody = styled.div`
    margin-bottom: 15px;
    font-size: 1.2rem;
`
export const ContactInfoFormContainer = styled.div`
    width: 1000px;
    height: 370px;
    display: flex;
    margin:0 auto;
    flex-direction: row;
    margin-bottom:2rem;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding-left: 2rem;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    img{
        width: 600px;
        height: 100%;
        border-radius: 15px;
        @media (max-width: 768px) {
            display: none;
        }

    }
    @media (max-width: 768px) {
       flex-direction: column;
    }
`

export const ContactInfoFormLabel = styled.label`
  width: auto; 
  height: auto; 
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #333333;
  font-size: 24px; 
  @media (max-width: 768px) {
        font-size: 16px;
    }
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const ContactInfoFormInput = styled.input`
  width: 370px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 0px 0px 0px;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;
  color: #333;
  align-content: center;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  @media (max-width: 768px) {
        width: 80%;
    }

`

export const ContactInfoFormTextArea = styled.textarea`
  width: 370px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;  color: #333;
  padding: 0px 0px 0px 0px;
  align-content: center;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  @media (max-width: 768px) {
        width: 80%;
    }
`
export const ContactInfoFormButton = styled.button`
  width: 102px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
  gap: 10;
  padding: 1rem;
  border:none;
  color: ${({ theme }) => theme.nord.white};
  border-radius: 8px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 14px;
  margin-top: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width:50%;
    margin-left: 0;
   }
`
