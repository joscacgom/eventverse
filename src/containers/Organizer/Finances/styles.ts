import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 70vw;
  height: auto;
  gap: 2em;
  margin-top: 2em;
  margin-bottom: 4em;

  @media (max-width: 768px) {
    min-width: 90vw;
    margin-bottom:0;
  }
`

export const Title = styled.h1`
  font-size: 2.2em;
  text-align: center;
  color: ${({ theme }) => theme.nord.black0};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 0;
    margin-top: 2em;
  }
`

type SubtitleProps = {
  bold?: boolean
}
export const Subtitle = styled.h2<SubtitleProps>`
  font-size: 1.2em;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  color: ${({ theme }) => theme.nord.black1};
  font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`

export const Balance = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`

export const TransferButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 9px;
  font-size: 1em;
  font-weight: 400;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.nord.black0};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.nord.white};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px;

  @media (max-width: 768px) {
    font-size: 0.8em;
    padding: 8px 16px;
  }
`

export const SearchBar = styled.input`
  width: 350px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.nord.black1};
  border-radius: 5px;
  padding: 0 10px;
  font-size: 1.2em;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1em;
  }
`

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.nord.black1};

  p {
    width: auto;
    height: auto;
    font-weight: 700;
    font-style: normal;
    font-family: "Inter-Bold", "Inter", "Inter Placeholder", sans-serif;
    color: #333333;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 100%;

    p {
      font-size: 16px;
    }
  }
`

export const TableItem = styled.p``

export const EventList = styled.div`
  width: 50%;
  margin-bottom: 22em;

  p {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10em;
  }
`
