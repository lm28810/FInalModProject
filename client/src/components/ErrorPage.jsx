import { useRouteError } from "react-router-dom";

import React from 'react'
 import './ErrorPage.css'
 
 function ErrorPage() {
    const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       <p><i>{error.statusText || error.message}</i></p>
      </p>
    </div>
  );
}
 
 export default ErrorPage