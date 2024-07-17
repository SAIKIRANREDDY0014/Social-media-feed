import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Createpost from './components/Createpost.jsx';
import Header from './components/Header.jsx';

const router = createBrowserRouter([{
//   path:"/Createpost",element : 
//   <Createpost/>}
   path:"/",element : <App/>,children : [{path:"/Createpost",element :<Createpost></Createpost>}]}
 ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
