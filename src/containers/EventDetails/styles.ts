import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 60%;
    gap:10rem;
    height: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        gap:2rem;
    }
`
export const MainImage = styled.img`
  width: 60vw;
  height: 242px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.25);
  opacity: 0.8;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 12px;
  border: 1px solid #d4d4d4;
  margin-bottom: 2rem;
    @media (max-width: 768px) {
        width: 100%;
    }

`
