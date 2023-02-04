import { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router";
import axios from "axios";
import DatePicker from "react-datepicker";
import  "react-datepicker/dist/react-datepicker.css";




function Edit() {
  const params = useParams();
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();
  const today = new Date();

  const [form, setForm] = useState({
    avatar: "",
    productName: "",
    inventory: 0,
    nextDelivery: date,
    deliveryAmount: 0,
    price: 0,
    description: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const id = params.id.toString();
      try {
        const response = await axios.get(
          `http://localhost:4000/items/update/${params.id.toString()}`
        );
        const record = response.data;
        if (!record) {
          window.alert(`Record with id ${id} not found`);
          navigate("/");
          return;
        }
        setForm(record);
      } catch (error) {
        const message = `An error has occurred: ${error}`;
        window.alert(message);
        return;
      }
    };
    fetchData();
  }, [params.id, navigate]);

  const updateForm = (value) => {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const editedProduct = {
      avatar: form.avatar,
      productName: form.productName,
      inventory: form.inventory,
      nextDelivery: form.nextDelivery,
      deliveryAmount: form.deliveryAmount,
      price: form.price,
      description: form.description,
    };

    try {
      await axios.post(`http://localhost:4000/update/${params.id}`, {
        editedProduct,
      });
      navigate("/");
    } catch (error) {
      const message = `An error has occurred: ${error}`;
      window.alert(message);
      return;
    }
  };
  
  return (
      <div className='form-container inventory-container'> 
       
      
          
          <form className='form' onSubmit={onSubmit}>
              <h2 className='form-header'>Edit Your Products Here!</h2>
              <p>Pleade fill out all fields for edit to be valid</p>
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