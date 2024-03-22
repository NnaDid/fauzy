import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Signup from './components/pages/Signup.jsx'
import Login from './components/pages/Login.jsx'
import Dashboard  from './components/pages/Dashboard.jsx'

import Users from './components/pages/Users.jsx'
import Transactions from './components/pages/Transactions.jsx'
import Funding from './components/pages/Funding.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
   {  path:'/',   element: <App/>  },
   {  path:'/signup',   element: <Signup/>  },
   {  path:'/login',   element: <Login/>  },
   {  
    path:'/dashboard',  element: <Dashboard/>,
    children:[
    {  path:'/dashboard/users',     element: <Users/>  },
    {  path:'/dashboard/tx',        element: <Transactions/>  },
    {  path:'/dashboard/funding',   element: <Funding/>  },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}>
        <App />
    </RouterProvider>

  </React.StrictMode>,
)
