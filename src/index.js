import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import GlobalStyle from './style/globalstyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
