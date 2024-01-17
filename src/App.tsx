import './index.css';

import { AddForecast, CommonErrorPage, Forecasts } from '@pages';
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

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
