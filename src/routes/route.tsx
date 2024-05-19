import RootErrorBoundary from '@components/common/ErrorBoundary/RootErrorBoundary';
import AppLayout from '@components/layout/AppLayout/AppLayout';
import { OrderConfirmPage, OrderPage } from '@pages/index';
import { createBrowserRouter } from 'react-router-dom';

const BASE_URL = '/react-shopping-cart/dist/';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <OrderPage />,
        },
        {
          path: '/confirm',
          element: <OrderConfirmPage />,
        },
      ],
    },
  ],
  {
    basename: BASE_URL,
  },
);

export default router;
