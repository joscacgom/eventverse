import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.black0};
    margin-bottom: 1rem;
`

export const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.nord.black0};
`

export const Input = styled.input`
    width: 35%;
    height: 3rem;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.nord.black0};
    margin-bottom: 1rem;

    &:focus {
        outline: none;
    }
`

export const Select = styled.select``

export const Option = styled.option`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.nord.black0};
    width: 35%;
    height: 3rem;
`

export const Button = styled.button`
    border: none;
    cursor: pointer;
    width: 35%;
    height: 3rem;
    border-radius: 9px;
    background-color: ${({ theme }) => theme.nord.black0};
    padding: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.nord.white};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    &:hover {
        opacity: 0.9;
    }
`
