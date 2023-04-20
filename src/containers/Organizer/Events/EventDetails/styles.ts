import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    height: auto;
    min-height: 100vh;
    margin-bottom: 5em;
`

export const BackButton = styled.a`
  cursor: pointer;
  border: none;
  border-radius: 9px;
  font-size: 1.2em;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.nord.blue};
`

export const Title = styled.h1`
    font-size: 2.2em;
    font-weight: 600;
    margin-bottom: 10px;
`

export const Subtitle = styled.h2`
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin-bottom: 10px;
`

export const Sells = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`

export const Earnings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`

export const Text = styled.p`
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 10px;
`

export const Span = styled.span`
    font-size: 1.2em;
    font-weight: 600;
    margin-left: 50px;
`
export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
    opacity: 0.7;
`
