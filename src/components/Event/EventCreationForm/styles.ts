import styled from 'styled-components'

export const EventCreationMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
        margin-top: 7rem;
    }
    @media (min-width: 1920px){
        width: 70%;
    }

`
export const EventCreationInputOption = styled.option`
  width: auto; 
  height: auto; 
  opacity: 0.41;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;  color: #333;
  color: #000000;
  font-size: 14px;
  @media (max-width: 768px) {
        font-size: 12px;
    }
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const EventCreationHeader = styled.div`
  width: auto; 
  height: auto;
  white-space: pre;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  color: #000000;
  font-size: 36px;
  @media (max-width: 768px) {
    font-size: 24px;
    }
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const EventCreationFormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        padding: 0;
    }
    @media (min-width: 1920px){
        width: 70%;
    }

`

export const EventCreationFormLabel = styled.label`
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

export const EventCreationFormInput = styled.input`
  width: 365px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 0px 0px 0px 0px;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;  color: #333;
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
  @media (min-width: 1920px){
        width: 70%;
    }
`
export const EventCreationFormInputDate = styled.input`
  width: 365px;
  height: 37px;
  background-color: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 0.25rem;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;  color: #333;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  ::-webkit-calendar-picker-indicator {
    filter: invert(0.5);
    opacity: 0.5;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const EventCreationFormTextArea = styled.textarea`
  width: 365px;
  height: 37px;
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
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const EventCreationFormImageFile = styled.input`
  width: 371px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  font-size: 14px;
  font-family: "Inter-Medium", sans-serif;
  color: #333;
  padding: 10px;
  align-content: flex-start;
  outline: none;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
  transition: border-color 0.2s ease-in-out;

  &::file-selector-button {
    font-size: 14px;
    font-family: "Inter-Medium", sans-serif;
    color: #0077b6;
    border: none;
    background: none;
    outline: none;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #222222;
    padding: 0.5rem 1rem;
    align-content: flex-start;
    border:none;
    color: ${({ theme }) => theme.nord.white};
    border-radius: 8px;
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
        width: 45%; 
        font-size: 10px;
    }
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1920px){
        width: 70%;
    }
`

export const EventCreationFormLocationImage = styled.img`
  width: 367px;
  height: 231px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  @media (max-width: 768px) {
        width: 80%;
    } 
  @media (min-width: 1920px){
        width: 70%;
        height: 462px;
    }
`
export const EventCreationFormImagePreview = styled.img`
  width: 367px;
  height: 231px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  opacity: 0.25;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 5px;
  border: 1px solid #222;
    @media (max-width: 768px) {
        width: 80%;
    }
    @media (min-width: 1920px){
        width: 70%;
        height: 462px;
    }
`
