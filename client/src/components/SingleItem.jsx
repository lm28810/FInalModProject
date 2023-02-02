import axios from 'axios';
import React, { useState, useEffect } from 'react'

function SingleItem() {
    const[records, setRecords]=useState([])

     // This method fetches the records from the database.
  
  const fetchData = () => {
    return axios.get("http://localhost:4000/items/:id")
          .then((response) => setRecords(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])
    //  useEffect(() => {
    //     async function getRecords() {
    //       const response = await fetch(`http://localhost:4000/items/:id`);
 
    //       if (!response.ok) {
    //         const message = `An error occurred: ${response.statusText}`;
    //         window.alert(message);
    //         return;
    //       }
 
    //       const records = await response.json();
    //       setRecords(records);
    //     }
 
       // getRecords();

        
 
        //return;
     // }, [records.length]);
  
  
 
      //  Delete Function
  
  // async function deleteRecord(id) {
  //   axios.delete(`http://localhost:4000/items/${id}`)
  //       .then(response => { console.log(response.data)});
     
 
  //     const newRecords = records.filter((el) => el._id !== id);
  //     setRecords(newRecords);
  //   }

  return (
    <div className='inventory-container container'>
      <div className='Scard'>Entire Card
        <div>
          <h2 className='ProductName'>Product Name</h2>
          
          <div className='current-image'></div>
        </div>
        <div className='Single-info-container'>
          <h3 className='single-title'>Product Info</h3>
          <ul>
            <li>Price</li>
            <li>Delivery Price</li>
            <li>Avaliable for Delivery</li>
            <li></li>
            <li></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi velit beatae, in dicta perspiciatis? Labore optio minus delectus neque error eos sit molestiae suscipit dolore. Cum officiis ut iure.</p></li>
          </ul>
        </div>
      </div>
      <div classname="single-btn"> <h2 className='single-title'> Product Settings</h2>
        <div>
        <button className='edit sbtn photo-button' >Edit</button>
        </div>
        <div>
          {/* <button className="delete sbtn" onClick={()=>deleteRecord()} >Delete</button> */}
        </div>
        <div>
        <button className="photo-button sbtn">Add To Cart</button>
      </div></div>

         
      </div>
  )
}

export default SingleItem