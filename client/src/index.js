// Imports (React, App, {createRoot}, {StrictMode})
import React from 'react';
import App from './App';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

// rootElement = root
const rootElement = document.getElementById('root');
// root = createRoot(rootElement)
const root = createRoot(rootElement);

// root.render()
root.render(
    <StrictMode>
      <App />
    </StrictMode>,
);
  
