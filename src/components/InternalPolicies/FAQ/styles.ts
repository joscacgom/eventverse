import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    text-align: center;
    font-size: 1.5rem;
    margin-top: 20px;
    & > *:first-child {
        margin: 0 auto;
    }
`
export const Title = styled.h1`
    width: auto; 
    height: auto; 
    font-weight: 600;
    font-style: normal;
    font-family: "Inter-SemiBold", "Inter", sans-serif;
    color: #000000;
    font-size: 36px;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`

export const Text = styled.div`
    margin-bottom: 15px;
    font-size: 1.2rem;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.8rem;
        text-align: justify;
    }
`

export const Paragraph = styled.p`
    margin-bottom: 15px;
    font-size: 1.2rem;
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     & > *:first-child {
        margin-bottom: 15px;
    }

`

export const Body = styled.div`
    margin-bottom: 15px;
    font-size: 1.2rem;
`
