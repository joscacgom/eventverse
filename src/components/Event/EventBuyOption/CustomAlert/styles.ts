import styled from 'styled-components'

type ContainerProps = {
    status: string
}
export const Container = styled.div<ContainerProps>`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    width:100%;
    height:auto;
    text-align:center;
    background-color: ${({ status, theme }) =>
        status === 'Info' ? theme.nord.blue : theme.nord.red};    
    border-radius: 9px;
    padding:1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    gap:1rem;
    p{
        width: auto;
        height: auto;
        font-weight: 400;
        text-align:center;
        color: ${({ theme }) => theme.nord.white};
        font-style: normal;
        font-family: "Inter", sans-serif;
        font-size: 15px;
    }
    svg{
        width: 30px;
        height: 30px;
    }
`

export const Text = styled.p`
    width: auto;
    height: auto;
    font-weight: 400;
    text-align:center;
    color: ${({ theme }) => theme.nord.white};
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-size: 15px;
`
