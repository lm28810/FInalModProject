import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";


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
      await fetch(`http://localhost:5000/${id}`, {
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
       {records.map(item => (
         <div className="photo">
         
           <li><img src={item.avatar} alt={item.productname} /></li>
           <li><h3>{item.productname}</h3></li>
           <div>
             <li><p>Product Info</p></li>

             <li><p>Price: {item.price}</p></li>
             <li><p>Price: {item.deliveryAmt}</p></li>

             <li><p>Earliest Delivery Date is {item.nextDelivery}</p></li>
             <li><p>Description: {item.description}</p></li>
             <div>
               <button>{ item.inventory <1 ? <p>Out of Stock</p> : <p>Add to Cart</p> }</button>
             </div>
           </div>
      </div>) )}
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
     
     {records.length === 0 ? <p>There is Nothing Avaliable</p>:<p>There are {records.length} items Avaliable</p>}
   </div>
 );
}