import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {GlobalStyle} from './GlobalStyle/globalStyle'
import Routes from './services/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
)
