import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 177px;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fcfcfc;
  align-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  border-left: none;
  & >:nth-child(2) {
    p{
      margin-left: 0.4rem;
    }
    svg{
      margin-left: 0.1rem;
    }
  }

  @media (max-width: 768px) {
    height: 80px;
    width: 100%;
    flex-direction: row;
    border-radius: 0;
    position: absolute;
    p{
      font-size: 0.7rem;
    }

  }
`

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
  font-style: normal;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
  font-size: 14px;
  height: 50px;
  padding: 1rem;
  width: 100%;
  gap:1rem;
  margin-top:2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #e6e6e6;
  }

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    text-align: center;
    justify-content: center;
    p{
      display: none;
    }
    margin: 0;
  }
`
