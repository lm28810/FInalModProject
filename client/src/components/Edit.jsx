import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css";




function Edit() {
    const [date, setDate] = useState(new Date) 
    let today = new Date ()
 const [form, setForm] = useState({
   avatar: "",
   productname: "",
  inventory: 0,
  nextDelivery: 0,
  deliveryAmt: 0,
 price: 0,
description: "",
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`/items/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
     const editedPerson = {
        avatar: form.avatar,
   productname: form.productname,
  inventory: form.inventory,
  nextDelivery: form.nextDelivery,
  deliveryAmt: form.deliveryAmt,
 price: form.price,
description: form.description
    
   };
 
   // This will send a post request to update the data in the database.
    //   axios.post(`http://localhost:4000/items/update/${params.id.toString()}`, editedPerson)
//     //   .then(res => console.log(res.body));
 axios
      .post(`http://localhost:4000/items/update/${params.id.toString()}`, editedPerson)
     .then((res) => { 
          console.log(res.body)
        navigate("/items");
      })
      .catch((error) => {
        console.log(error);
        window.alert("An error occurred while updating the product");
      });
    
  
// await fetch(`http://localhost:4000/items/update/${params.id}`, {
//      method: "POST",
//      body: JSON.stringify(editedPerson),
//      headers: {
//        'Content-Type': 'application/json'
//      },
//    });
 
 
   navigate("/items");
 }
    
    
console.log(params.id.toString())
  
  return (
      <div className='form-container inventory-container'> 
       
      
          
           <form className='form' onSubmit={onSubmit}>
              <h2 className='form-header'>Edit Your Products Here!</h2>
              <p>Please fill out all fields for edit to be valid</p>
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


 export default Edit