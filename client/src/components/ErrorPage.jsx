import { useRouteError } from 'react-router-dom'

import React from 'react'
import './ErrorPage.css'

function ErrorPage() {
    const error = useRouteError()
    console.error(error)
  return (
      <div className='container'>
          <div className='error-info'>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
         <p> <i className='error'>{error.statusText || error.message} </i></p>
          </div>
      </div>
  )
}

export default ErrorPage

