import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Dataform() {
    const [date, setDate]= useState( new Date())
    const [form, setForm] = useState({
        avatar: "https://placekitten.com/g/200/200",
        productname: "Your Product Name",
        inventory: 0,
        nextDelivery: date,
        deliveryAmt: 0,
        price: 0,
        description: "Some notes",
        
    })

  // const timeHandleChange = (date) => setDate(date)
  const today = new Date()
  // return <DatePicker selected={date} onChange={timeHandleChange} minDate={today} dateFormat="MM, dd, yyyy" />
          
    

    const navigate = useNavigate()

    // This will handle the submission info
    function updateForm(value) {
        return setForm((prev) => {
     return { ...prev, ...value };
   });
    }

    // submission

    async function onSubmit(e) {
        e.preventDefault();
        const newPerson = { ...form };


        axios.post('http://localhost:4000/items/add', newPerson)
      .then(res => console.log(res.detail));
 
//    await fetch("http://localhost:4000/items/add",  {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//      },
//      body: JSON.stringify(newPerson),
//    })
//    .catch(error => {
//      window.alert(error);
//      return;
//   });
 
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
      <div className='form-container inventory-container'> 
          {/* onchange handler needed */}
          
          <form className='form' onSubmit={onSubmit}>
              <h2 className='form-header'>Add New Products Here!</h2>
       <div className="form-group">
         <label htmlFor="avatar">Image Url</label>
                  <input
                      required
           type="text"
           className="form-control"
           id="avatar"
           value={form.avatar}
                      onChange={(e) => updateForm({ avatar: e.target.value })} />
    
              </div>
              
       <div className="form-group">
         <label htmlFor="productname">Product Name</label>
                  <input
                      required
           type="text"
           className="form-control"
           id="productname"
           value={form.productname}
           onChange={(e) => updateForm({ productname: e.target.value })}
         />
              </div>
                <div className="form-group">
         <label htmlFor="inventory">Inventory</label>
         <input
           type="number"
           className="form-control"
           id="inventory"
           value={form.inventory}
           onChange={(e) => updateForm({ inventory: e.target.value })}
         />
              </div>
                 <div className="form-group">
         <label htmlFor="nextDelivery">Delivery Date</label>
         <DatePicker selected={date} onChange={date => setDate(date)} minDate={today} dateFormat="MM-dd-yyyy" autoComplete='off' />
              </div>
                <div className="form-group">
         <label htmlFor=" deliveryAmt">Delivery Amount</label>
                  <input
                      required
                      step={.1}
           type="text"
           className="form-control"
           id=" deliveryAmt"
           value={form. deliveryAmt}
           onChange={(e) => updateForm({  deliveryAmt: e.target.value })}
         />
              </div>
                <div className="form-group">
         <label htmlFor="price">Price</label>
                  <input
                      required
                      type="text"
                      step={.1}
           className="form-control"
         id="price"
         
                      
           value={form.price}
           onChange={(e) => updateForm({ price: e.target.value })}
         />
              </div>
                <div className="form-group">
         <label htmlFor="description">Description</label>
                  <textarea
                      className="description1"
                      required
           type="text"
           className="form-control"
           id="description"
           rows="4" cols="50"
           value={form.description}
           onChange={(e) => updateForm({ description: e.target.value })}
         />
              </div>
              <div className="form-group">
         <input
           type="submit"
           value="Create product"
           className="btn"
         />
       </div>
     </form>
    </div>
  )
}

export default Dataform