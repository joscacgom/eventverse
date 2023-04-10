import Link from 'next/link'
import styled, { keyframes } from 'styled-components'

type NavProps = {
    mobile?: boolean // Make `mobile` prop optional
}

export const Nav = styled.nav<NavProps>`
    display: flex;
    flex-direction: ${({ mobile }) => mobile ? 'column' : 'row'};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: ${({ mobile }) => mobile ? '100%' : '60px'};
    padding: ${({ mobile }) => mobile ? '20px' : '0 40px'};
    border-radius: 0px 0px 0px 0px;
    border-color: rgba(0, 0, 0, 0.08);
    border-style: solid;
    border-top-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-right-width: 0px;
    img{
      cursor:pointer;
    }
  `

type MenuProps = {
    mobile?: boolean // Make `mobile` prop optional
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
    primary: boolean;
    mobile?: boolean; // Make `mobile` prop optional
}

export const LinkItem = styled(Link)<LinkProps>`
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

const glowingButton85 = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`

export const Button85 = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingButton85} 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &:active {
    background-color: #444;
    outline: 0;
  }

  &:hover {
    opacity: 0.8;
  }
`
