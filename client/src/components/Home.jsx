import React from 'react'
import { CssBaseline,Typography, Container,Grid, Card } from '@mui/material'
import { grey } from '@mui/material/colors'

function Home() {
  return (
      <div >
          <CssBaseline />
         
          <Typography variant='h2' mt={2}>What Do You Need Today?</Typography>
          <Container maxWidth='sm'>
              <Typography variant='h6' paragraph color='red'>Click on one of the boxes below to get your day off to a good start!</Typography>
          </Container>
          <div>
              
          
          </div>
              
      </div>
  )
}

export default Home