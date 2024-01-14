import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/signup',
        element: (
          <Signup />
        )
      },
      {
        path: '/login',
        element: (
          <Login />
        )
      },
      {
        path: '/',
        element: (
          <AllProducts />
        )
      },
      {
        path: '/products/new',
        element: (
          <NewProduct />
        )
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={ router } />
  </React.StrictMode>
);

reportWebVitals();
