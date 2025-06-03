import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import UserDetails from './Components/Users/UserDetails/UserDetails';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/about",
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<About></About>,
      },
      {
        path: "/user/:Userid",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.Userid}`),
        element:<UserDetails></UserDetails>,
      },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
