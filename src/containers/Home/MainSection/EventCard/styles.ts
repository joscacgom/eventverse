import styled from 'styled-components'

export const BORDER_RADIUS = '9px'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 250px;
  border: 1px solid ${({ theme }) => theme.nord.gray0};
  cursor: pointer;
  transition: transform 0.35s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.35s ease-in-out;
  }

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const CardImage = styled.img`
  height: 40%;
  width: 100%;
  object-fit: cover;
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

export const Date = styled.p`
  font-size: 0.8em;
  margin: 8px 0;
  color: ${({ theme }) => theme.nord.blue};
`

export const Description = styled.p`
  font-size: 16px;
  margin: 4px 0;
`
