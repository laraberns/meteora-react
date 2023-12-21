import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
} else {
  console.error('Root element not found.');
}
