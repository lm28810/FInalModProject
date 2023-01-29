import { useRouteError } from 'react-router-dom'

import React from 'react'

function ErrorPage() {
    const error = useRouteError()
    console.error(error)
  return (
      <div>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <i>{error.statusText || error.message} </i>
    </div>
  )
}

export default ErrorPage

