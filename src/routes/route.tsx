import AppLayout from '@components/layout/AppLayout/AppLayout';
import { OrderConfirmPage, OrderPage } from '@pages/index';
import { createBrowserRouter } from 'react-router-dom';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-shopping-cart/' : '/';

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
