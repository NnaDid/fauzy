import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Signup from './user/components/auth/Signup.jsx';
import Login from './user/components/auth/Login.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
     { path: '/', element:<App/>,},
     { path: '/signup', element:<Signup/>,},
     { path: '/login', element:<Login/>,},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> 
       <App />
    </RouterProvider>
  </React.StrictMode>,
)
