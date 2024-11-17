import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Community from './pages/Community.tsx';
import Tech from './pages/Tech.tsx';
import News from './pages/News.tsx';
import MyPage from './pages/mypage/MyPage.tsx';
import MainHome from './pages/home/MainHome.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainHome />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'tech',
        element: <Tech />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
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
