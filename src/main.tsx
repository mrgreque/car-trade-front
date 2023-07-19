import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import BasePageTemplate from './components/template/basePage'
import CarList from './components/pages/carList'
import RegisterCar from './components/pages/registerCar'
import AdminPage from './components/pages/admin'
import { LoaderSession } from './components/global/loaderSession'
import BaseAdminPageTemplate from './components/template/baseAdminPage'

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
      },

    ]
  },
  {
    path: '/admin',
    element: <BaseAdminPageTemplate />,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: '/admin/carro/cadastro',
        element: <RegisterCar />,
        loader: LoaderSession,
        errorElement: <h1>Expired Session</h1>,
      },
      {
        path: '/admin/carro/edicao/:id',
        element: <RegisterCar />,
        loader: LoaderSession,
        errorElement: <h1>Expired Session</h1>,
      },
      {
        path: '/admin',
        element: <AdminPage />,
        loader: LoaderSession,
        errorElement: <h1>Expired Session</h1>,
      }
    ]
  },
  {
    path: '*',
    element: <h1>Not Found</h1>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
