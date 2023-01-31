import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
      <div className='nav-container'>
          <div className='nav'>
              <h1>The Product Store</h1>
          </div>
          <nav className="navbar">
  <  Link to="/"className="active"><i class="fa fa-fw fa-home"></i> Home</Link> 
  <Link to="#"><i className="fa fa-fw fa-search"></i> Search</Link> 
  <Link to="/items/add"><i className="fa fa-fw fa-envelope"></i> Sell Product</Link> 
  <Link to="/items"><i className="fa fa-fw fa-user"></i> Explore Inventory</Link>
          </nav>
          
          
    </div>
  )
}

export default Navbar