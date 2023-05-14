import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    gap: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ResellTicketImage = styled.img`
  width: 209px;
  height: 199px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 80%;
    height: 80%;
    }

`

export const RoyaltiesContainer = styled.div`
  width: 304px;
  height: 39px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
  padding: 0px 0px 0px 0px;
  margin-bottom: 0.5rem;
  align-content: center;
  border-radius: 10px;
`

export const RoyaltiesHeader = styled.h3`
  width: auto; /* 71px */
  height: auto; /* 19px */
  white-space: pre;
  z-index: 1;
  font-weight: 600;
  font-style: normal;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  color: #000000;
  font-size: 16px;
  letter-spacing: 0px;
`

export const Royalties = styled.p`
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 14px;
`

export const NetworkContainer = styled.div`
  width: 267px;
  height: 151px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0.5rem;
  gap: 0.5rem;
  background-color: #ffffff;
  align-content: center;
  border-radius: 0px 0px 0px 0px;
  border-color: #222;
  border-style: solid;
  border-top-width: 1px;
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
`

export const NetworkHeader = styled.h3`
  width: auto; /* 239px */
  height: auto; /* 19px */
  font-weight: 600;
  font-style: normal;
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  color: #000000;
  font-size: 16px;
`

export const SmartContract = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SmartContractHeader = styled.h3`
  width: auto; /* 148px */
  height: auto; /* 17px */
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #000000;
  font-size: 14px; 
`

export const SmartContractAddress = styled.p`
  width: auto; /* 267px */
  height: auto; /* 13px */
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 11px;
`

export const BlockchainExplorer = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  align-content: center;
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

export const BlockchainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const BlockchainHeader = styled.h3`
  width: auto; /* 73px */
  height: auto; /* 17px */
  white-space: pre;
  z-index: 1;
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #000000;
  font-size: 14px;
`

export const Blockchain = styled.p`
  width: auto; /* 42px */
  height: auto; /* 13px */
  font-weight: 500;
  font-style: normal;
  font-family: "Inter-Medium", "Inter", sans-serif;
  color: #858585;
  font-size: 11px;
`
