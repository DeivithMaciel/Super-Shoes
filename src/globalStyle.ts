import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif

}

body {
  width: 100%;
  background-color: #e1e1e1;
  color: #1e1e1e;
  }

.container {
  display: flex;
  flex-direction: column;
  padding: 24px 128px;
}
`

export const colors = {
  orange: '#ff7e3b',
  lightOrange: '#ffbe76',
  white: '#eee',
  pink: '#e81a5d',
  blue: '#00a8fb'
}
