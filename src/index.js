import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import GlobalStyle from './style/GlobalStyle'
import GlobalVariables from './style/GlobalVariables'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>      
    <GlobalStyle />
    <GlobalVariables />
    <App />
  </React.StrictMode>
)