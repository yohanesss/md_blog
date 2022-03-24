import styled from 'styled-components'
import {theme} from '../../constants/theme'

export const NavWrapper = styled.nav`
position: absolute;
box-sizing: border-box;
margin: 0;
min-width: 0;
border-bottom: ${theme.variants.navbar.borderBottom};
background-color: ${theme.variants.navbar.backgroundColor};
-webkit-backdrop-filter: ${theme.variants.navbar.backdropFilter};
backdrop-filter: ${theme.variants.navbar.backdropFilter};
padding-left: 4px;
padding-right: 4px;
position: fixed;
top: 0;
left: 0;
width: 100%;
`

export const NavInnerWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${theme.breakpoints[0]}) {
    width: 100%;
    max-width: 600px;
  }
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 720px;
    max-width: 720px;
  }
`

export const NavSection = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  padding: 4px 8px;
  h2 {
    font-size: 1em;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    padding-left: 10px;
  }
`