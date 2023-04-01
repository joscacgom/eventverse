import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;


  @media (max-width: 768px) {
    align-items: center;
  }
`

export const Header = styled.header`
  margin-bottom: 2rem;
  margin-top: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`

export const EventList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
