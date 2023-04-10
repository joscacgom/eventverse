import styled from 'styled-components'

export const MainImage = styled.img`
  width: 100vw;
  height: 300px;
  -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  opacity: 0.25;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 0px 0px 0px;
  border: 1px solid #d4d4d4;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    height: 100%;
  }
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
