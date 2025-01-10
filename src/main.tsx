import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './App.tsx';
import {Router} from '@routes/index';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from 'api/QueryClient/index.ts';
import Modal from 'react-modal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
Modal.setAppElement('#root');
