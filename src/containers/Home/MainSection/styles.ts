import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  
  padding: 2rem;
  width: 100%;
  height: auto;
  
  @media (max-width: 768px) {
    align-items: center;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100px;
  padding: 0 3.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
    height: 60px;
    margin-top: 2rem;
  }

  @media (min-width: 1300px) {
    padding: 0 7rem;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`

export const EventList = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Search = styled.div``

export const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`
