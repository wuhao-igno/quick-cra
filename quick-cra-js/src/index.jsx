import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { configure } from 'mobx';
import App from './App';

configure({
  enforceActions: 'observed',
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
