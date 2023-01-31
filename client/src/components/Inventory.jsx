import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom';

 export async function loader() {
  const inventory = await  axios.get('http://localhost:4000/items')
     .then(res => console.log(res.body));;
  return { inventory };
 }


function Inventory() {
const { inventory } = useLoaderData();
 
  return (
    <div>
    <h2 className="search-title">Our Current Inventory</h2>
    </div>
  )
}

export default Inventory