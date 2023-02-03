import React, { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useParams } from "react-router-dom";


const Record = (props) => (
 <tr>
   <td>{props.record.avatar}</td>
   <td>{props.record.productname}</td>
   <td>{props.record.inventory}</td>
   <td>{props.record.nextDelivery}</td>
   <td>{props.record. deliveryAmt}</td>
   <td>{props.record.price}</td>
   <td>{props.record.description}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function Inventory() {
  const {id} = useParams();
 const [records, setRecords] = useState([]);
 
   
  
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
  
  
 
    // This method will delete a record
    async function deleteRecord(id) {
      await fetch(`http://localhost:4000/${id}`, {
        method: "DELETE"
      });
 
      const newRecords = records.filter((el) => el._id !== id);
      setRecords(newRecords);
    }
 
    // This method will map out the records on the table
    function recordList() {
      return records.map((record) => {
        return (
          <Record
            record={record}
            deleteRecord={() => deleteRecord(record._id)}
            key={record._id}
          />
        );
      });
    }

 // This following section will display the table with the records of individuals.
 return (
   <div className="inventory-container">
     <h2 className="form-header">Check Out Our Inventory</h2>
  
     <div className="pic-container">
     <ul>
         {records.map(item => {
           console.log({ item })
           let itemsUrl = "/items/" + item._id
           return(
           <div className="photo" key={item._id}>
         
             <Link to={itemsUrl}>
           
               <li><img src={item.avatar} alt={item.productname} /></li>
               <li><h3 className="photo-title">{item.productname}</h3></li>
               <div className="photo-info">
                 <li><p>Product Info</p></li>

                 <li><p>Price: {item.price}</p></li>
                 <li><p>Price: {item.deliveryAmt}</p></li>

                 <li><p>Earliest Delivery Date is {item.nextDelivery}</p></li>
                 <li><p className="none">Description: {item.description}</p></li>
               </div></Link>
             <div className="button-holder">
               <button className="photo-button">{item.inventory < 1 ? <p>Out of Stock</p> : <p>Add to Cart</p>}</button>
             </div>
          
           </div>) } )}
       </ul>
       </div>
     <div className="single-pic">
       <Outlet/>
     </div>
      
  
       {/* <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody> */}
     
     {records.length === 0 ? <p className="count">There is Nothing Avaliable</p>:<p>There are {records.length} items Avaliable</p>}
   </div>
 );
}