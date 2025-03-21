import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #E6002B; /* Pantone 185C */
    --text-color: #333333;
    --background-color: #FFFFFF;
    --background-light: #F5F5F5;
    --border-color: #E0E0E0;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-color);
    background-color: var(--background-light);
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .ant-card {
    border-radius: 8px;
    overflow: hidden;
    transition: var(--transition);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .section-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .more {
      font-size: 14px;
      color: var(--primary-color);
      font-weight: normal;
    }
  }
`

