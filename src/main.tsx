import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BasePageTemplate from './components/template/basePage'
import CarList from './components/pages/carList'
import RegisterCar from './components/pages/registerCar'
import AdminPage from './components/pages/admin'
import { LoaderSession } from './components/global/loaderSession'
import BaseAdminPageTemplate from './components/template/baseAdminPage'
import ErrorPage from './components/pages/error'

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
    errorElement: <ErrorPage type="notFound" />,
    children: [
      {
        path: '/',
        element: <CarList />,
      },

    ]
  },
  {
    path: '/admin',
    element: <BaseAdminPageTemplate />,
    errorElement: <ErrorPage type="notFound" />,
    children: [
      {
        path: '/admin/carro/cadastro',
        element: <RegisterCar />,
        loader: LoaderSession,
        errorElement: <ErrorPage type="noSession" />,
      },
      {
        path: '/admin/carro/edicao/:id',
        element: <RegisterCar />,
        loader: LoaderSession,
        errorElement: <ErrorPage type="noSession" />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
        loader: LoaderSession,
        errorElement: <ErrorPage type="noSession"/>,
      }
    ]
  },
  {
    path: '*',
    element: <BasePageTemplate />,
    children: [
      {
        path: '*',
        element: <ErrorPage type="notFound" />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
