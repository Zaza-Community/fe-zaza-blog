import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Community from './pages/Community.tsx';
import Tech from './pages/Tech.tsx';
import Nav from './components/Nav.tsx';
import News from './pages/News.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    element: <Nav />,
    children: [
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/tech',
        element: <Tech />,
      },
      {
        path: '/community',
        element: <Community />,
      },
    ],
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
