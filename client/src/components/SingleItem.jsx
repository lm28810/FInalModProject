import axios from 'axios';
import React, { useState, useEffect } from 'react'

function SingleItem() {
    const[records, setRecords]=useState([])

     // This method fetches the records from the database.
     
    useEffect(() => {
        async function getRecords() {
          const response = await fetch(`http://localhost:4000/items/`);
 
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
 
          const records = await response.json();
          setRecords(records);
        }
 
      getRecords();
      
        return;
      }, [records.length]);
  
      //  Delete Function
  
  async function deleteRecord(id) {
    axios.delete(`http://localhost:4000/${id}`)
        .then(response => { console.log(response.data)});
     
 
      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    }

  return (
    <div className='inventory-container container'>
      <div>Entire Card
        <div>Photo</div>
        product Info
      </div>
      <div classname="single-btn">Buttons
        <div>
        <buttons className='edit btn' >Edit</buttons>
        </div>
        <div>
          <buttons className="delete btn" >Delete</buttons>
        </div>
        <div>
        <buttons className="photo-button btn">Add To Cart</buttons>
      </div></div>

          <h1>Nothing here yet</h1>
      </div>
  )
}

export default SingleItem