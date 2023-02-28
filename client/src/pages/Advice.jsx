import './Advice.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import { Typography } from '@mui/material'

const Advice = () => {
    const [advice, setAdvice] = useState('')
   
        
    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                console.log(response)
                const {advice} = response.data.slip
                setAdvice(advice)
            })
            .catch((error) => {
            console.log(error)
        })
    }
        , [])

    function newAdvice() {
            axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                console.log(response)
                const {advice} = response.data.slip
                setAdvice(advice)
            })
            .catch((error) => {
            console.log(error)
        })
    }
    

  return (
      <div className='Advice' >
          <div>
              <Typography variant='h5' paragraph>This portion of the website draws comments from an external API</Typography>
          
          </div>
          
          <div className='Advice-Card' >
              <h1>{advice} </h1>
              <button className='Advice-button' onClick={newAdvice} >Click for Advice</button>
          </div>
    </div>
  )
}

export default Advice