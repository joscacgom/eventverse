import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: calc(25% - 2rem);
    margin-bottom: 2rem;
    height: 350px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: calc(50% - 2rem);
    }

    @media (max-width: 620px) {
        width: calc(100% - 2rem);
    }

    @media (min-width: 1300px) {
        width: calc(20% - 2rem);
    }

`
