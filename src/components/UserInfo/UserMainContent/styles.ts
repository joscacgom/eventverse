import styled from 'styled-components'

export const HeaderSection = styled.h1`
    font-size: 2.2em;
    text-align: left;
    color: ${({ theme }) => theme.nord.black0};
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    margin-bottom: 3rem;
    margin-top: 1rem;
    @media (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
        margin-top: 7rem;
        margin-bottom: 0;
    }
`

export const PrivateKeyContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.nord.white};
  background-color: ${({ theme }) => theme.nord.red};
  height: auto;
  border-radius: 8px;
  z-index: 1;
  padding: 1rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);

  button {
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: 9px;
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

  animation: pulse 1.5s ease-in-out infinite;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    z-index: 1;
    font-size: 0.8rem;
    width: 90%;
    height: auto;

    small {
      font-size: 0.8rem;
    }
  }
`

export const WarningContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        color: ${({ theme }) => theme.nord.white};
        font-size: 1.5rem;
        font-weight: 700;
    }
    @media (max-width: 768px) {
        p{
          font-size: 1rem;

        }
      
    }
    
`
export const InfoMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap:2rem;
        align-items: center;
        justify-content: center;
    }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10rem;
  padding-bottom:5rem;
  gap: 5rem;
  img{
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: row;
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
    padding-bottom:0;
    margin-top: 5rem;
    margin-left: 0;
    margin-right: 0;
    font-size: 0.8rem;
    }
`
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    
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
