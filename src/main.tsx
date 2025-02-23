import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById('JangHwanPark')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)