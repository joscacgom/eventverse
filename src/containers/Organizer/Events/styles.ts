import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 70vw;
  min-height: 80vh;
  height: auto;
  gap: 2em;
  margin-top: 2em;
`

export const Title = styled.h1`
  font-size: 2.2em;
  text-align: center;
  color: ${({ theme }) => theme.nord.black0};
`

export const Subtitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
  color: ${({ theme }) => theme.nord.black1};
`

export const SearchBar = styled.input`
  width: 350px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.nord.black1};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.2em;
`

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.nord.black1};
`

export const TableItem = styled.p``

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  margin-bottom: 4em;
  gap: 2em;
`
