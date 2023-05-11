import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    margin-left: 20rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        margin-left: 0;
        padding: 0;
    }

`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        width: 80%;
        gap: 1rem;
    }
`

export const EventCreationFormButton = styled.button`
  width: 205px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
  margin-left: 2rem;
  gap: 10;
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
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width:50%;
    margin-left: 0;
   }
`
