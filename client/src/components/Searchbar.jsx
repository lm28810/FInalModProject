import React from 'react'
import { Outlet } from 'react-router-dom'

function Searchbar() {
  return (
    <div>
          <h2 className='search-title'>Search Products</h2>
<div>
      <input className='search' placeholder="Enter Post Title"/>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Searchbar