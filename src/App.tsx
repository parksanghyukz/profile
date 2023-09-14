import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Main from './pages/Main';

export default function App() {

  let router = null;

  router=createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      errorElement:<NotFound/>,
      children:[
        {index:true, element:<Main/>}
      ]
    }
  ])
  








  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
