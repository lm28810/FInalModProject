import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
import { CssBaseline, AppBar,Toolbar, Typography, Drawer, ListItem, ListItemText } from '@mui/material'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import makeStyles from '@mui/material';

const links = [
  {
    linkName: "Home",
    link: "/"
  },
  {
    linkName: "ToDoList",
    link: "/"
  },
  {
    linkName: "Advice",
    link: "/"
  }
]

function Navbar() {
  return (
    <div className='nav-container'>
      {/* <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <AutoModeIcon />  <Typography variant='h5'>Life Box</Typography>
          <div></div>
        </Toolbar>
      </AppBar> */}



      <div className='nav'>
        
              <h1 className='nav-title'>Life in a Box</h1>
          </div>
      <nav className="navbar">
       
  <  Link to="/"className="active"><i className="fa fa-fw fa-home"></i> Home</Link> 
  <Link to="/items/find/:item"><i className="fa fa-fw fa-search"></i> To Do List</Link> 
  {/* <Link to="/items/add"><i className="fa fa-fw fa-envelope"></i> Sell Product</Link>  */}
  <Link to="/advice"><i className="fa fa-fw fa-user"></i> Advice</Link>
          </nav>
          
          
    </div>
  )
}

export default Navbar
