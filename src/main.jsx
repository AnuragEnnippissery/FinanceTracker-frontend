import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Home from './components/home/home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//import Credit from './components/credit/credit.jsx'
//import Dairy from './components/credit/dairy.jsx'
//import InsertTransaction from './components/addEntry/insertTransaction.jsx'
//import Vegetable from './components/credit/vegetable.jsx'
//import Grocery from './components/credit/grocery.jsx'
//import Login from './components/authentication/login.jsx'
//import Register from './components/authentication/register.jsx'
//import Medicine from './components/credit/medicine.jsx'
//import Shopping from './components/credit/shopping.jsx'
//import Bill from './components/credit/bill.jsx'
//import Dashboard from './components/home/dashboard.jsx'
//import GetPrediction from './components/prediction/prediction.jsx'
import { AuthProvider } from './components/authentication/authcontext.jsx'
//import ErrorPage from './utils'
import ErrorPage from './utils/error.jsx'
import ProtectedRoute from './components/authentication/protectedRoutes.jsx'
import { lazy,Suspense } from 'react'

//lazy components
//const Home = lazy(() => import('./components/Home/Home.jsx'));
const Home =lazy(()=>import('./components/home/home.jsx'))
const Login=lazy(()=>import('./components/authentication/login.jsx'))
const Register=lazy(()=>import('./components/authentication/register.jsx'))
const Dashboard=lazy(()=>import( './components/home/dashboard.jsx'))
const Credit=lazy(()=>import('./components/credit/credit.jsx'))
const Dairy=lazy(()=>import('./components/credit/dairy.jsx'))
const InsertTransaction=lazy(()=>import('./components/addEntry/insertTransaction.jsx'))
const Vegetable=lazy(()=>import('./components/credit/vegetable.jsx'))
const Grocery=lazy(()=>import('./components/credit/grocery.jsx'))
const Medicine=lazy(()=>import('./components/credit/medicine.jsx'))
const Shopping=lazy(()=>import('./components/credit/shopping.jsx'))
const Bill =lazy(()=>import('./components/credit/bill.jsx'))
const GetPrediction=lazy(()=>import('./components/prediction/prediction.jsx'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorPage/>,
    children:[{
      path:'/',element: <Home/>
    },

    //public routes
    {
      path:'/login',element:<Suspense fallback={<div>Loading...</div>}><Login /></Suspense> 
    },
    {
      path:'/register',element:<Suspense fallback={<div>Loading...</div>}><Register /></Suspense> 
    },
    {
      path:'/dashboard',element:<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense> 
    },

    //protected Routes
    {
      path:'/addEntry/insertTransaction',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><InsertTransaction /></Suspense>
        </ProtectedRoute>
      )
    },

    {
      path:'/credit',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Credit /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/dairy',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Dairy /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/vegetable',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Vegetable /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/grocery',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/medicine',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Medicine /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/shopping',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Shopping /></Suspense>
        </ProtectedRoute>
      )
    },
    {
      path:'/credit/bill',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><Bill /></Suspense>
        </ProtectedRoute>
      )
    },
    
    {
      path:'/prediction',element:(
        <ProtectedRoute>
          <Suspense fallback={<div>Loading...</div>}><GetPrediction /></Suspense>
        </ProtectedRoute>
      )
    },
  ]
  }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AuthProvider>                     {/* <-- wrap entire app */}
      <RouterProvider router={appRouter} />
    </AuthProvider>
  </StrictMode>,
)
