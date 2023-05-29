import styled from 'styled-components'

type ContainerProps = {
    status: string
}
export const Container = styled.div<ContainerProps>`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    width:90%;
    height:auto;
    background-color: ${({ status, theme }) =>
        status === 'Safe' ? theme.nord.blue : theme.nord.red};    
    border-radius: 9px;
    padding:1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    gap:1rem;
    svg{
        width: 30px;
        height: 30px;
    }
     @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 ${({ status, theme }) =>
                            status === 'Safe' ? theme.nord.blue : theme.nord.red};
        }
        50% {
            box-shadow: 0 0 0 2px ${({ status, theme }) =>
                            status === 'Safe' ? theme.nord.blue : theme.nord.red};   
        }
        100% {
            box-shadow: 0 0 0 0 ${({ status, theme }) =>
                            status === 'Safe' ? theme.nord.blue : theme.nord.red};   
        }
}
    animation : pulse 1.5s ease-in-out infinite;
`

export const Header = styled.h1`
    width: auto;
    height: auto;
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #424242;
    font-size: 18px;
`

export const Text = styled.p`
    width: auto;
    height: auto;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.white};
    font-style: normal;
    font-family: "Inter", sans-serif;
    font-size: 15px;
`
