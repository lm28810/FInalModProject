
import React, { useState} from 'react';
import axios from 'axios';

function Searchbar(props) {

  const [input, setInput] = useState('')

  const handleSubmit = e => { 
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("")
  }
  
  return (
    <div className='inventory-container'>
      <h2 className='search-title'>Create  A Todo</h2>
      <form onSubmit={handleSubmit}>
<div>
        <input className='search'
          placeholder="Enter a Task"
          value={input}
            onChange={e => setInput(e.target.value)} />
          <button>Add To List</button>
        </div>
      </form>
      <div>
        
      </div>
    </div>
  )
}

export default Searchbar