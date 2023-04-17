import styled from 'styled-components'

export const TicketAction = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  border:none;
  text-align: center;
  color: ${({ theme }) => theme.nord.white};
  background-color: ${({ theme }) => theme.nord.green};
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 12px;
  border-radius: 100%;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.nord.green};
    background-color: ${({ theme }) => theme.nord.white};
  }
  @media (max-width: 768px) {
    font-size: 10px;

  }
 
`

export const TicketResellCancel = styled.button`
  width: 40px;
  height: 20px;
  border:none;
  text-align: center;
  color: ${({ theme }) => theme.nord.white};
  background-color: ${({ theme }) => theme.nord.red};
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.nord.red};
    background-color: ${({ theme }) => theme.nord.white};
  }
  @media (max-width: 768px) {
    font-size: 10px;

  }
`

export const TicketResellPopUpTitle = styled.p`
  width: auto; 
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const TicketResellPopUpPrice = styled.p`
  width: auto; 
  height: auto;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #333333;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const TicketResellPopUpForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 768px) {
        margin-left: 0;
        padding: 0;
    }
`

export const TicketResellPopUpLabel = styled.label`
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #333333;
  font-size: 20px; 
  @media (max-width: 768px) {
        font-size: 14px;
    }
`

export const TicketResellPopUpInput = styled.input`
  display: flex;
  height: 20px;
  width: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-size: 14px;
  text-align: center;
  font-family: "Inter-Medium", sans-serif;  color: #333;
  align-content: center;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-right-width: 0px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TicketResellPopUpImage = styled.img`
  width: 150px;
  height: 130px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 9px;
  `

export const TicketResellPopUp = styled.div`
  position: fixed;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 0.25rem 0.75rem ${({ theme }) => theme.nord.gray1};;
  
  @media (max-width: 768px) {
    padding: 1rem;
    width: 95%;

    }

`

export const TicketResellPopUpHeader = styled.h2`
  width: auto; 
  height: auto; 
  z-index: 1;
  font-weight: 700;
  margin: 0;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  color: #000000;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 22px;
    }
`

export const TicketResellPopUpButton = styled.button`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
  border:none;
  color: ${({ theme }) => theme.nord.white};
  border-radius: 8px;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-size: 14px;
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }
  @media (max-width: 768px) {
    width:50%;
   }
`
