import Link from 'next/link'
import styled from 'styled-components'

type NavProps = {
    mobile?: boolean
}
export const Nav = styled.nav<NavProps>`
    display: flex;
    flex-direction: ${({ mobile }) => mobile ? 'column' : 'row'};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${({ mobile }) => mobile ? '100%' : '60px'};
    padding: ${({ mobile }) => mobile ? '20px' : '0 40px'};
`

type MenuProps = {
    mobile?: boolean
}
export const MenuLinks = styled.div<MenuProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: ${({ mobile }) => mobile ? '100%' : 'auto'};
    height: ${({ mobile }) => mobile ? 'auto' : '100%'};
    margin-top: ${({ mobile }) => mobile ? '20px' : '0'};
`

type LinkProps = {
    primary?: boolean
    active?: boolean
    mobile?: boolean
}
export const LinkItem = styled(Link) <LinkProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ mobile }) => mobile ? '100%' : '120px'};
    height: 40px;
    border-radius: 9px;
    color: ${({ theme, primary }) => primary ? theme.nord.white : theme.nord.black0};
    background-color: ${({ theme, primary }) => primary ? theme.nord.black0 : theme.nord.white};
    
    &:hover {
        box-shadow: ${({ theme, primary }) => primary ? `0px 0px 2px ${theme.nord.black0}` : 'none'};
    }
`
