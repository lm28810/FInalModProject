import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dataform from './components/Dataform';
import Searchbar from './components/Searchbar';
import Inventory,  {loader as rootLoader} from './components/Inventory';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    // action: rootAction,
    
    children: [
      { index: true, element: <Home /> },
      {
        path: "/items/add",
        element: <Dataform/>,
      },
      {
        path: "/items",
        element: <Inventory />,
        // loader: rootLoader,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


