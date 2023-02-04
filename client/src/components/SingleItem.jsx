import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useLoaderData } from "react-router-dom";
import { useParams, redirect } from 'react-router-dom';


function SingleItem() {
      const {id} = useParams();
  const [record, setRecord] = useState({});
      let itemsUrl3 = "/items/update/" + record._id

  const fetchData = () => {
     return axios.get(`http://localhost:4000/items/${id}`)
        .then((response) => setRecord(response.data));
   }
  
  useEffect(() => {
     fetchData();
  }, [id])

  //Edit

  function editRedirect(id) {
    return redirect(`/items//update/'${record.id}`)
  }
  
  
  // This method will delete a record
    async function deleteRecord(id) {
      await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE"
      });
 
      const newRecord = record.filter((el) => el.id !== id);
      setRecord(newRecord);
    }
 
  return (
    <div className='inventory-container container'>
      <div className='Scard'>
        <div>
          <h2 className='ProductName'>{record.productname}</h2>
          <div className='current-image'>
            <img src={record.avatar} alt={record.productname} />
          </div>
        </div>
        <div className='Single-info-container'>
          <h3 className='single-title'>Product Info</h3>
          <ul>
            <li>{`Price ${record.price}`}</li>
            <li>Delivery Price: {record.deliveryAmt} </li>
            <li>Avaliable for Delivery: { record.nextDelivery}</li>
            <li></li>
            <li></li>
            <li><p>{ record.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi velit beatae, in dicta perspiciatis? Labore optio minus delectus neque error eos sit molestiae suscipit dolore. Cum officiis ut iure.</p></li>
          </ul>
        </div>
      </div>
      <div className="single-btn"> <h2 className='single-title'> Product Settings</h2>
        <div>
          <Link to={ itemsUrl3} > 
        <button className='edit sbtn photo-button'>Edit</button>
       </Link>  
       </div>
        <div>
       <button className="delete sbtn photo-button" onClick={()=>deleteRecord()} >Delete</button> 
        </div>
        <div>
        <button className="photo-button sbtn">Add To Cart</button>
      </div></div>
    </div>
  )
}

export default SingleItem

