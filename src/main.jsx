import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartLoader from './Loaders/cartLoader.js';

import App from './App'
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import './index.css'
import Checkout from './components/CheckOut/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <h1>Home Page</h1>,
      },
      {
        path: '/shop',
        element: <Shop/>,
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: CartLoader
      },
      {
        path: '/inventory',
        element: <Inventory/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/checkout',
        element: <Checkout/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
