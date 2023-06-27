import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled(Link)`
    display: flex;
    flex-direction: row;
    width: 100%;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 40%;
`
export const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 60%;
`

export const Image = styled.img`
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    object-fit: cover;
`

export const EventTitle = styled.p`
    font-size: 1.2em;
`
