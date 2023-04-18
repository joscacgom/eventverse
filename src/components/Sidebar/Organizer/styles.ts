import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 14%;
    height: auto;
    min-height: 100vh;
    padding-top: 2em;
    padding-left: 2.5em;
    gap: 1em;
`

type TabButtonProps = {
    active: boolean
}
export const TabButton = styled.button<TabButtonProps>`
    font-size: 1.2em;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background: none;
    color: ${({ theme, active }) => (active ? theme.nord.black0 : theme.nord.gray2)};
`
