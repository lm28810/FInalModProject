import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Dataform() {
    const [form, setForm] = useState({
        avatar: "https://placekitten.com/g/200/200",
        productname: "Your Product Name",
        inventory: 0,
        nextDelivery: new Date(),
        deliveryAmt: 0,
        price: 0,
        description: "Some notes",
        
    })

    const navigate = useNavigate()

    // This will handle the submission info
    function theForm(value) {
        return setForm((prev) => {
     return { ...prev, ...value };
   });
    }

    // submission

    async function onSubmit(e) {
        e.preventDefault();

    

    const newPerson = { ...form };
 
   await fetch("http://localhost:4000/items/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ 
        avatar: "https://placekitten.com/g/200/200",
        productname: "Your Product Name",
        inventory: 0,
        nextDelivery: new Date(),
        deliveryAmt: 0,
        price: 0,
        description: "Some notes",
        
    });
   navigate("/");
 }


   
  
  return (
      <div>
          {/* onchange handler needed */}
          <h2>Add New Products Here!</h2>
          <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="avatar">Image Url</label>
         <input
           type="text"
           className="form-control"
           id="avatar"
           value={form.avatar}
                      onChange={(e) => updateForm({ avatar: e.target.value })} />
    
              </div>
              
    </div>
  )
}

export default Dataform