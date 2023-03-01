import React from 'react'
import { CssBaseline, Button, Box, ButtonGroup } from '@mui/material'

function Home() {
    const Buttons =[
        <Button key='one'>Todo List</Button>,
        <Button key='Two'>Advice App</Button>
    ]
  return (
      <div className='home-container'>
          <div className='container-data'>
              <h1 className='home-title'>Change Your Life With A Click!</h1>
              <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {Buttons}
      </ButtonGroup>
              
          </div>
          <div className='container-data'>
              <img className='image1' src="https://media.istockphoto.com/id/1210524240/photo/i-can-be-who-i-truly-am-through-art.jpg?s=2048x2048&w=is&k=20&c=i420VPuRJZnnolkizYyo5r9hPWLy0WBtLRcKrl-YcV4=" alt="picture" />
          </div>
      </div>
  )
}

export default Home