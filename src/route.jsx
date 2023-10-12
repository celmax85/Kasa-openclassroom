import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home/Home.jsx'
import Logement from './page/Logement/Logement.jsx'
import About from './page/About/About.jsx'
import Error from './page/Error/Error.jsx'
import Footer from './assets/components/Footer/Footer.jsx';
import Navbar from './assets/components/Navbar/Navbar.jsx';

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

export const HeaderFooterLayout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeaderFooterLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/logement',
        element: <Logement />
      },
      {
        path: '/about',
        element: <About />
      }
    ],
    errorElement: <Error />
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
