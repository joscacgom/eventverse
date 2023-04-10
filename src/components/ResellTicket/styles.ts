import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 20px;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;

    }
`
