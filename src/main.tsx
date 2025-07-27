import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/main.scss';
import './styles/theme.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthProvider from './context/AuthContext/AuthProvider.tsx';
import RouteProvider from './context/RouteContext/RouteProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouteProvider>
      <AuthProvider>
        <QueryClientProvider client={new QueryClient()} >
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </RouteProvider>
  </StrictMode>,
)
