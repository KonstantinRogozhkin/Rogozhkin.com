import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/shared/config/i18n/i18n.config';
import './app/styles/index.css';
import './app/styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
