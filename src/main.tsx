import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';

import App from './app';

import { QueryClientProvider } from '@utils/data-fetching/react-query';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider>
      <Router>
        <Toaster richColors />
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
