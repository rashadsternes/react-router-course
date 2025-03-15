import React from 'react';
import {createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';

// Select the root element to render the app
const rootElement = document.getElementById('root');

// Create a root instance
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="yellow-border" />
    <App />
  </React.StrictMode>
);