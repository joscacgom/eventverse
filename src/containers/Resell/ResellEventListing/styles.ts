import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  min-height: 100vh;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  height: auto;
  padding: 1rem 0;
`

export const EventTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black0};
`

export const SubTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black1};
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  height: auto;
`

export const FilterButton = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.nord.black0};
  color: ${({ theme }) => theme.nord.white};
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 9px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
export const Heading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 1rem 0;
`

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 5em;
`

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  opacity: 0.3;
`

export const AbsoluteTitle = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;

  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.nord.black0};

  @media (min-width: 1300px) {
    font-size: 3rem;
    top: 13%;
  }

  @media (max-width: 600px) {
    font-size: 2.4rem;
    top: 25%;
  }
`
