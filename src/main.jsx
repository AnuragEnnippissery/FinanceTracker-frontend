import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Credit from './components/credit/credit.jsx'
import Dairy from './components/credit/dairy.jsx'
import InsertTransaction from './components/addEntry/insertTransaction.jsx'
import Vegetable from './components/credit/vegetable.jsx'
import Grocery from './components/credit/grocery.jsx'
import Login from './components/authentication/login.jsx'
import Register from './components/authentication/register.jsx'
import Medicine from './components/credit/medicine.jsx'
import Shopping from './components/credit/shopping.jsx'
import Bill from './components/credit/bill.jsx'
import Dashboard from './components/home/dashboard.jsx'
import GetPrediction from './components/prediction/prediction.jsx'
import { AuthProvider } from './components/authentication/authcontext.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement:<NotFound/>,
    children:[{
      path:'/',element: <Home/>
    },
    {
      path:'/login',element:<Login/>
    },
    {
      path:'/register',element:<Register/>
    },
    {
      path:'/addEntry/insertTransaction',element:<InsertTransaction/>
    },
    {
      path:'/credit',element:<Credit/>
    },
    {
      path:'/credit/dairy',element:<Dairy/>
    },
    {
      path:'/credit/vegetable',element:<Vegetable/>
    },
    {
      path:'/credit/grocery',element:<Grocery/>
    },
    {
      path:'/credit/medicine',element:<Medicine/>
    },
    {
      path:'/credit/shopping',element:<Shopping/>
    },
    {
      path:'/credit/bill',element:<Bill/>
    },
    {
      path:'/dashboard',element:<Dashboard/>
    },
    {
      path:'/prediction',element:<GetPrediction/>
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
