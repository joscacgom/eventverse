import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    gap: 1rem;
    width: 100%;
    margin-left: 1rem;
    @media (max-width: 768px) {
       justify-content:center;
       margin-left: 0;
       margin-top:-2rem;

    }
    
   
`
export const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.nord.black1};
    font-family: "Inter-Medium", "Inter", sans-serif;

`

export const Image = styled.img`
   border-radius: 100%;
   width: 30px;
   height: 30px;
`

export const Name = styled.h1`
    font-size: 14px;
    font-weight: 700;
    color: #000;
`
