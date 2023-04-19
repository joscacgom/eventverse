import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    min-height: 100vh;  
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 85%;
    height: auto;
    min-height: 100vh;
    padding-left: 6em;
    padding-top: 1.6em;
    gap: 1.2em;
    margin-bottom: 6em;
`
