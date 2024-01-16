import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { isUserLoggedIn } from './services/AuthService';
import ProductDetail from './pages/ProductDetail';

function AuthenticatedRoute({children}) {

  const isAuth = isUserLoggedIn();

  if (isAuth) {
    return children;
  }

  return <Navigate to="/" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <Login />
        )
      },
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
        path: '/products',
        element: (
          <AuthenticatedRoute>
            <AllProducts />
          </AuthenticatedRoute>
        )
      },
      {
        path: '/products/:id',
        element: (
          <AuthenticatedRoute>
            <ProductDetail />
          </AuthenticatedRoute>
        )
      },
      {
        path: '/products/new',
        element: (
          <AuthenticatedRoute>
            <NewProduct />
          </AuthenticatedRoute>
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
