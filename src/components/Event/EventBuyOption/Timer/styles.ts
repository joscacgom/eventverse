import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  align-self: center;
`

export const Item = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;

`

export const Value = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;

`

export const Label = styled.p`
  font-size: 1rem;
  opacity: 0.75;
`
