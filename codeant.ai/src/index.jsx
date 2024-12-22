import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file exists or update the path
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your `index.html` has a `<div id="root"></div>`
);

