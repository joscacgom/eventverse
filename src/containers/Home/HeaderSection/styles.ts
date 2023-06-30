import styled, { keyframes } from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
    
    width: 100%;
    height: 60vh;
    @media (min-width: 1300px) {
        height: 45vh;
    }

    @media (max-width: 767px) {
        height: 55vh;
    }
`

export const Search = styled.div``

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 1rem;
  border: 1px solid ${({ theme }) => theme.nord.gray3};
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.nord.gray2};
  }
`

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 75%;
    background-image: url(/images/home-party.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.15;
    z-index: -1;

    @media (min-width: 1300px) {
        height: 55%;
    }
`

export const Heading = styled.h1`
    opacity: 1;
    text-align: center;
    margin-top: 1em;
    font-size: 2.6em;
    font-weight: bold;

    & br {
        display: block;
        content: "";
        margin-top: 0.5em;
    }

    @media (min-width: 1300px) {
        font-size: 3.4em;
    }

    @media (max-width: 767px) {
        font-size: 2em;
    }
`
export const SpanClip = styled.span`
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`

const liquidAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const SpanLiquid = styled.span`
  display: inline;
  color: transparent;
  background: linear-gradient(-45deg, #231557, #ff1361);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${liquidAnimation} 4s linear infinite;
  background-size: 200% 100%;
  background-position: 100% 50%;
`
