import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; 
  }

  :root {
    --white: #ffffff;
    --black: #000000;
    --error: #dc3a3a;
    --surface: #f6f8ff;

    --purple-100: #f8f0ff;
    --purple-200: #ecd9ff;
    --purple-300: #dcb9ff;
    --purple-400: #c894fd;
    --purple-500: #ab57ff;
    --purple-600: #9935ff;
    --purple-700: #861dee;
    --purple-800: #6e0ad1;
    --purple-900: #5603a7;

    --orange-100: #fff0d6;
    --orange-200: #ffe2ad;
    --orange-300: #ffc583;
    --orange-400: #ffae65;
    --orange-500: #ff8832;

    --blue-100: #e2f5ff;
    --blue-200: #b1e4ff;
    --blue-300: #7cd2ff;
    --blue-400: #34b9ff;
    --blue-500: #00a2fe;

    --green-100: #e4fbdc;
    --green-200: #d0f5c3;
    --green-300: #9be282;
    --green-400: #60cf37;
    --green-500: #2ba600;

    --gray-100: #f6f6f6;
    --gray-200: #eeeeee;
    --gray-300: #cccccc;
    --gray-400: #999999;
    --gray-500: #555555;
    --gray-600: #4a4a4a;
    --gray-700: #3a3a3a;
    --gray-800: #2b2b2b;
    --gray-900: #181818;

    --font-regular: 400;
    --font-bold: 700;

    --font-28: 1.75rem;
    --font-24: 1.5rem;
    --font-20: 1.25rem;
    --font-18: 1.125rem;
    --font-16: 1rem;
    --font-15: 0.9375rem;
    --font-14: 0.875rem;
    --font-12: 0.75rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  body{
    width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  input {
    border: none;
    padding: none;
  }
  input:focus {
    outline: none;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }

`;

export default GlobalStyle;
