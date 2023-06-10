import styled from 'styled-components'

export const MainImage = styled.img`
  width: 100vw;
  height: 300px;
  
  object-fit: cover;
  margin-bottom: 2rem;
  opacity: 0.3;
`
export const MainImageText = styled.h1`
    font-family: "Inter", sans-serif;
    margin-top: 7rem;
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    position: absolute;
    z-index: 1;
    @media (max-width: 768px) {
        font-size: 24px;
        margin-top: 5rem;
    }
`
