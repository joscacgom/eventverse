import styled from 'styled-components'

export const BORDER_RADIUS = '9px'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 225px;
  width: 240px;
  border: 1px solid ${({ theme }) => theme.nord.gray0};
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.35s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.35s ease-in-out;
  }

  small{
    font-size: 0.8em;
  }
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: fill;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const CardContent = styled.div`
  height: 60%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-size: 1.2em;
  margin: 0;
`

export const Price = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black1};
`

export const BuyButton = styled.button`
  border: none;
  outline: none;

  background-color: ${({ theme }) => theme.nord.black0};
  color: ${({ theme }) => theme.nord.white};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
