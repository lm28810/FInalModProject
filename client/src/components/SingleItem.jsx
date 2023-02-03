import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import { useParams } from 'react-router-dom';


function SingleItem() {
      const {id} = useParams();
 
  const [record, setRecord] = useState({});

  const fetchData = () => {
     return axios.get(`http://localhost:4000/items/${id}`)
        .then((response) => setRecord(response.data));
   }
  
  useEffect(() => {
     fetchData();
   }, [id])
 
  return (
    <div className='inventory-container container'>
      <div className='Scard'>Entire Card
        <div>
          <h2 className='ProductName'>{record.productname}</h2>
          <div className='current-image'></div>
        </div>
        <div className='Single-info-container'>
          <h3 className='single-title'>Product Info</h3>
          <ul>
            <li>{`Price ${record.price}`}</li>
            <li>`Delivery Price ` </li>
            <li>Avaliable for Delivery</li>
            <li></li>
            <li></li>
            <li><p>{ record.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi velit beatae, in dicta perspiciatis? Labore optio minus delectus neque error eos sit molestiae suscipit dolore. Cum officiis ut iure.</p></li>
          </ul>
        </div>
      </div>
      <div className="single-btn"> <h2 className='single-title'> Product Settings</h2>
        <div>
        <button className='edit sbtn photo-button' >Edit</button>
        </div>
        <div>
        <button className="photo-button sbtn">Add To Cart</button>
      </div></div>
    </div>
  )
}

export default SingleItem




// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { useLoaderData } from "react-router-dom";
// import { useParams } from 'react-router-dom';


// function SingleItem() {
//     let { id } = useParams();
 
//   const [record, setRecord] = useState({});

//   // useEffect(() => {
//   //   axios.get(`http://localhost:4000/items/${params.id}`)
//   //     .then(function (res) {
//   //       setRecord(res.data);
//   //     })
//   //     .catch(function (err) {
//   //       console.error(err);
//   //     });
//   // }, [params.id]);

//   console.log(params);
  
//   const fetchData = () => {
//      return axios.get(`http://localhost:4000/items/${params.id}`)
//         .then((response) => setRecord(response.data));
//    }
  

//    useEffect(() => {
//      fetchData();
//    }, [params.id])
  
  
//     //  useEffect(() => {
//     //     async function getRecords() {
//     //       const response = await fetch(`http://localhost:4000/items/:id`);
 
//     //       if (!response.ok) {
//     //         const message = `An error occurred: ${response.statusText}`;
//     //         window.alert(message);
//     //         return;
//     //       }
 
//     //       const records = await response.json();
//     //       setRecords(records);
//     //     }
 
//        // getRecords();

        
 
//         //return;
//      // }, [records.length]);
  
  
 
//       //  Delete Function
  
//   // async function deleteRecord(id) {
//   //   axios.delete(`http://localhost:4000/items/${id}`)
//   //       .then(response => { console.log(response.data)});
     
 
//   //     const newRecords = records.filter((el) => el._id !== id);
//   //     setRecords(newRecords);
//   //   }

//   return (

    

//     <div className='inventory-container container'>
//       <div className='Scard'>Entire Card
      
//         <div>
//           <h2 className='ProductName'>{record.productname}</h2>
          
//           <div className='current-image'></div>
//         </div>
//         <div className='Single-info-container'>
//           <h3 className='single-title'>Product Info</h3>
//           <ul>
//             <li>{`Price ${record.price}`}</li>
//             <li>Delivery Price</li>
//             <li>Avaliable for Delivery</li>
//             <li></li>
//             <li></li>
//             <li><p>{ record.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi velit beatae, in dicta perspiciatis? Labore optio minus delectus neque error eos sit molestiae suscipit dolore. Cum officiis ut iure.</p></li>
//           </ul>
//         </div>
//       </div>
//       <div classname="single-btn"> <h2 className='single-title'> Product Settings</h2>
//         <div>
//         <button className='edit sbtn photo-button' >Edit</button>
//         </div>
//         <div>
//           {/* <button className="delete sbtn" onClick={()=>deleteRecord()} >Delete</button> */}
//         </div>
//         <div>
//         <button className="photo-button sbtn">Add To Cart</button>
//       </div></div>

         
//       </div>
//   )
// }

// export default SingleItem