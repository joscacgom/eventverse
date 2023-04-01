import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60%;
`

export const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 75%;
    background-image: url(/images/home-party.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.15;
    z-index: -1;
`

export const Heading = styled.h1`
    opacity: 1;
    text-align: center;
    margin-top: 1em;
    font-size: 2.6em;
    font-weight: bold;

    & br {
        display: block;
        content: "";
        margin-top: 0.5em;
    }

    @media (min-width: 1300px) {
        font-size: 3.4em;
    }

    @media (max-width: 767px) {
        font-size: 2em;
    }
`
