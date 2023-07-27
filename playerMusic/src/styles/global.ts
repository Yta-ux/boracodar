import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  font-size: 64.4%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #0F0D13;
  color: #E1E1E6;
  font-family: 'Roboto', sans-serif;
}

h1{
  font-size: 2.3rem;
  font-weight: 700;
}

p{
  font-size: 1.8rem;
  opacity: 0.67; 
}
`;

export default GlobalStyle;
