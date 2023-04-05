import styled from 'styled-components'

export const HeaderSection = styled.h1`
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #000000;
    font-size: 36px;
    margin-left: 0;
    margin-bottom: 10rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 7rem;
        margin-bottom: 0;
    }
`
export const PrivateKeyContainer = styled.div`
  position: fixed;
  top: 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.nord.white};
  background-color: ${({ theme }) => theme.nord.red};
  margin-top: 8rem;
  height: auto;
  border-radius: 8px;
  margin-right: 8rem;
  z-index: 1;
  width: auto;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    button {
        padding: 0.5rem;
        outline: none;
        border: none;
        border-radious: 9px;
        background-color: ${({ theme }) => theme.nord.white};
        cursor: pointer;
        display: flex;
        color: ${({ theme }) => theme.nord.red};
        margin-top: 1rem;
        justify-content: center;
        border-radius: 9px;
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        font-weight: 600;
        font-style: normal;
        font-family: "Inter", sans-serif;
        font-size: 16px;
        letter-spacing: 0px;
        line-height: 1.2;
        text-align: center;
         &:hover {
            background-color: ${({ theme }) => theme.nord.white};
            color: ${({ theme }) => theme.nord.black0};
    }

    }
   @keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 #a05454;
    }
    50% {
        box-shadow: 0 0 0 5px #a05454;
    }
    100% {
        box-shadow: 0 0 0 0 #a05454;
    }
}
    animation : pulse 1.5s ease-in-out infinite;
  
  @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      position:fixed;
      z-index: 1;
      font-size: 0.8rem;
      small{
        font-size: 0.5rem;
      }
      justify-content: center;
  };
`
export const WarningContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        color: ${({ theme }) => theme.nord.white};
        font-weight: 700;
    }
    @media (max-width: 768px) {
        p{
          font-style: 1rem;
        }
      
    }
    
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5rem;
  margin-left: 5rem;
  margin-top:-4rem;
  margin-bottom: 4rem;
  img{
    width: 198px;
    height: 213px;
    display: flex;
    flex-direction: row;
    margin-left: 3rem;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.25);
    align-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    margin-top: 5rem;
    margin-left: 0;
    font-size: 0.8rem;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    width: auto;
    height:auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
    
    p{
        font-weight: 700;
        font-style: normal;
        font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
        color: #333333;
        font-size: 18px;
    small{
            font-weight: 300;
            font-style: normal;
            font-family: "Inter-Light", "Inter", sans-serif;
            color: #919191;
            font-size: 15px;
        }
    }
    
    @media (max-width: 768px) {
        p{
            font-size: 0.8rem;
            text-align: left;
        }
    }
`
export const PrivateKeyButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    outline: none;
    border: none;
    align-items: center;
    width: 100%;
    height: 49px;
    background-color: ${({ theme }) => theme.nord.black0};
    color: ${({ theme }) => theme.nord.white};
    border-radius: 9px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-weight: 600;
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 10rem;

    &:hover {
        background-color: ${({ theme }) => theme.nord.white};
        color: ${({ theme }) => theme.nord.black0};
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 50px;
    }
`
