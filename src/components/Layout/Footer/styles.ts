import styled from 'styled-components'
import Link from 'next/link'

export const Foot = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 140px;
    padding: 0 135px;

    background-color: ${({ theme }) => theme.nord.black0};
    color: ${({ theme }) => theme.nord.white};

    @media (max-width: 768px) {
        padding: 20px 20px;
        flex-direction: column;
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.4rem;
    width: 70%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

export const MenuItem = styled(Link)``

export const Title = styled.h1`
    font-size: 1.8rem;
    font-weight: 400;
`
export const Text = styled.h4`
    font-size: 1rem;
    font-weight: 300;
`
