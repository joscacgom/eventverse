import styled from 'styled-components'

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  height: auto;
  gap: 1rem;
`
type Props = {
  selected: boolean;
};

export const CategoryItem = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(25% - 0.75rem);
  height: 55px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.nord.white : theme.nord.black0};
  color: ${({ theme, selected }) =>
    selected ? theme.nord.black0 : theme.nord.white};
  border-radius: 9px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: ${({ theme }) => theme.nord.white};
    color: ${({ theme }) => theme.nord.black0};
  }

  @media (max-width: 767px) {
    width: calc(50% - 0.75rem);
    height: 50px;
  }
`
