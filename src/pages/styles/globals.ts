import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    font-family:  'Roboto', sans-serif;
    background-color: ${(p) => p.theme.colors.background};
  }
`
const Container = styled.div`
 display: fixed;
  width: 100%;
  height: 100%;
`



export { Container }