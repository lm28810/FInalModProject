
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom'

function Searchbar() {

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/items/find/${searchTerm}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
  
  return (
    <div className='inventory-container'>
      <h2 className='search-title'>Search Products</h2>
      <form onSubmit={handleSearch}>
<div>
        <input className='search'
          placeholder="Enter Post Title"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </form>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Searchbar