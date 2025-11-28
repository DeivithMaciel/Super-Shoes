import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#ff7e3b',
  lightOrange: '#ffbe76',
  white: '#eee',
  pink: '#e81a5d',
  blue: '#00a8fb',
  gray: '#e1e1e1',
  black: '#1e1e1e'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
}

export const GlobalStyle = createGlobalStyle`

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif

}

body {
  width: 100%;
  background-color: ${colors.gray};
  color: ${colors.black};
  }

.container {
  display: flex;
  flex-direction: column;
  padding: 24px 128px;

  @media (max-width: ${breakpoints.desktop}) {
    padding: 24px;
  }
}
`
