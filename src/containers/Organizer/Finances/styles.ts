import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.6em;
  font-weight: 600;
  margin-bottom: 10px;
`

type SubtitleProps = {
  bold?: boolean
}
export const Subtitle = styled.h2<SubtitleProps>`
  font-size: 1.8em;
  font-weight: ${({ bold }) => bold ? 600 : 400};
`

export const Balance = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`

export const TransferButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 9px;
  font-size: 1.2em;
  font-weight: 400;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.nord.black0};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.nord.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px;
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
  width: 50%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.nord.black1};
`

export const TableItem = styled.p``

export const EventList = styled.div`
  width: 50%;
`
