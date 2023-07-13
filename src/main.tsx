import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BasePageTemplate from './components/template/basePage'
import CarList from './components/pages/carList'

// function ScrollToTop() {
//   const { pathname} = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasePageTemplate />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/',
        element: <CarList />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
