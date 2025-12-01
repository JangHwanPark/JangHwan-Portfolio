import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('JangHwanPark')!).render(
  <RouterProvider router={router} />
);
