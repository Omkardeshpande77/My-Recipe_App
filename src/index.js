import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppProvider } from './utils/fetchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </AppProvider>
);
  
