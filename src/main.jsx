import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import ProductDetail from './Components/ProductDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail></ProductDetail>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
