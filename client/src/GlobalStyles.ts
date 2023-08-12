import { createGlobalStyle } from 'styled-components';

declare module 'react' {
  interface CSSProperties {
    '--center'?: string;
    '--alert'?: string;
    '--color'?: string;
  }
}

const GlobalStyles = createGlobalStyle`
:root {
  /* FONTS */ 
  --f-sm: 0.8125rem; // 13px
  --f-md: 0.9375rem; // 15px
  --f-lg: 1.5rem; // 24px
  --f-xl: 2.25rem; // 36px

  /* COLORS */ 
  --white: #FFFFFF;
  --black: #000000;  
  --brown: #422006; 
  --green: #15803d;
  --blue: #1d4ed8;
  --blue2: #8da7f0;
  --red: #b91c1c;
  --orange: #fdba74;
  --orange2: #fff4e9;
  
  /* SHADOW */
  --bs-full: 5px 5px 0px rgba(0,0,0, 1);
  --bs-full-hover: 2px 2px 0px rgba(0,0,0, 1);  
  --bs-disabled-full: 5px 5px 0px rgba(0,0,0, 0.5);
  --bs-disabled-full-hover: 2px 2px 0px rgba(0,0,0, 0.5);
  
  --border: 2px solid var(--black);
  
  --max-width: 1140px;
  --form-max-width: 617px;
  --transition: all .2s linear;
}

*, *::before, *::after { box-sizing: border-box; }

* { margin: 0; }

html { 
  font-size: 100%; /*16px*/  
} 

html, body, #root { height: 100%; }

body {
  background-color: var(--dark-1);
  font-family:var(--font-family);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Roboto', sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  object-fit: cover;
}

ul { list-style: none; }

a { 
  text-decoration: none; 
  color: inherit 
}

input, button, textarea, select { font: inherit; }

button {
  cursor: pointer;
}

p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

h1, h2, h3, h4, h5 {
  margin-top: 0;
  font-family: var(--font-family);
  line-height: 1.3;
}


#root { isolation: isolate; }

.max-container {
  width: min(95%,var(--max-width));
  margin: 0 auto;
}
`;

export default GlobalStyles;
