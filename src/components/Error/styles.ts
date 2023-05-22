import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const Text = styled.p`
    font-size: 1.6em;
    line-height: 0.8em;
    color: ${({ theme }) => theme.nord.red};
    @media (max-width: 768px) {
        text-align: center;
    }

`
