import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider, params  as useParams} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Dataform from './components/Dataform';
import Searchbar from './components/Searchbar';
import Inventory,  {getRecords as rootLoader} from './components/Inventory';
import SingleItem from './components/SingleItem';
import Edit from './components/Edit'
import Advice from './pages/Advice';


// const itemId = () => {
//   const params = useParams()
//   console.log(params.id)
//   return {params.id}
//}
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
        path: "/advice",
        element: <Advice />,
         //getRecords: rootLoader,
      },{
        path: "items/:id",
        element: <SingleItem />,
        
      },{
        path: "items/update/:id",
        element: <Edit />,
        
      },{
        path: "/items/find/:title",
        element: <Searchbar />,
        
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


