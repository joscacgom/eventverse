import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-top: 1rem;
    margin-bottom: 5rem; 
    width: 500px;
    gap: 2rem;
    height: 300px;
    small {
        color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -1rem;
        padding-left: 0.7rem;
        @media (max-width: 768px) {
            padding-bottom: 0.5rem;
        }
    }
    h1 {
        color: #000000;
        background-color: #ffffff;
        font-size: 1.5rem;
        border-radius: 10px;
    }
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    @media (max-width: 768px) {
        width: 90vw;
        height: 40vh;
    }
`

export const IconWrapper = styled.div`
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 28px;
    height: 28px;
    margin-bottom: 1rem;
  }
`

export const ButtonText = styled.p`
    margin-top:11px;
    margin-left: 90px;
    color: #ffffff;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
    @media (max-width: 768px) {
        margin-left: 60px;
    }
    @media (max-width: 450px) {
        font-size: 12px;
        margin-left: 50px;
    }
`

export const GoogleButton = styled.div`
  width: 80%;
  height: 42px;
  background-color: #4285f4;
  color: #ffffff;
  border-radius: 2px;
  cursor:pointer;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669F2;
  }
`
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15rem;
    img{    
        height:auto;
        margin-top:1rem;
    }
  

`
export const Separator = styled.hr`
     border-top: 1px solid black;
     width: 50%;
     opacity: 0.2;

`

export const WalletButton = styled.div`
  display: flex;
  width: 80%;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.nord.black0};
  color: ${({ theme }) => theme.nord.white};
  border-radius: 9px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:hover {
        background-color: ${({ theme }) => theme.nord.white};
        color: ${({ theme }) => theme.nord.black0};
    }
`
