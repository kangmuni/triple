import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from './style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
