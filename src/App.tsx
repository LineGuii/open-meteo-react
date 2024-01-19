import './index.css';

import { AddForecast, CommonErrorPage, Forecasts } from '@pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Forecasts />,
  },
  {
    path: '/forecasts',
    element: <Forecasts />,
  },
  {
    path: '/add-forecasts',
    element: <AddForecast />,
  },
  {
    path: '*',
    element: <CommonErrorPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
