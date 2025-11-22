import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/home/home.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Credit from './components/credit/credit.jsx'
import Dairy from './components/credit/dairy.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //errorElement:<NotFound/>,
    children:[{
      path:'/',element: <Home/>
    },
    {
      path:'/credit',element:<Credit/>
    },
    {
      path:'/credit/dairy',element:<Dairy/>
    },
  ]
  }])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
