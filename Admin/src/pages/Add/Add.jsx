import React, {  useState } from 'react'
import './Add.css'
import upload_area from '../../assets/upload_area.png'
import axios from "axios"
import { toast } from 'react-toastify';

function Add({url}) {


  //CREATE ONE STATE Variable

  const [image,setImage] =useState(false);

  const [data,setData]=useState({
    name:"",
    description:"",
    price:""
  });                //data saved in data state variable

  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

 //api call
 const onSubmitHandler = async (event)=>{
  event.preventDefault();         //not refresh when add button click, the data remains when add button clicks

  const formData = new FormData();

  formData.append("name",data.name);
  formData.append("description",data.description);
  formData.append("price",Number(data.price));  //String converted to number -  Number use in that
  formData.append("image",image);

  //api call
  try{
  const response=await axios.post(`${url}/api/sketch/add`,formData); //DATA SENDING
  if(response.data.success){
    setData({
      name:"",
      description:"",
      price:""
    })
    setImage(false)
   
    toast.success(response.data.message)
  }
  else{
toast.error(response.data.message)
  }
 }
 catch (error) {
  console.error("There was an error uploading the data!", error);
}
}

  return (
    <div className='add'>
        <form className='flex-col' onSubmit={onSubmitHandler}>
    <div className='add-img-upload flex-col'>
      <p>Upload Image</p>
      <label htmlFor='image'>
        {/*for displaying the image when upload symbl clk nd select Image */}
         <img width={'120px'} height={'120px'} src={image?URL.createObjectURL(image):upload_area} alt=""/>  
        

      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required/>
    </div>

    <div className='add-product-name flex-col'>
<p>Product Name</p>

<input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here'/>
    </div>
    <div className='add-product-description flex-col'>
      <p>Product Description</p>
      <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Write content here' required>

      </textarea>
    </div>

    <div className='add-price flex-col'>
      <p>Product Price</p>

      <input onChange={onChangeHandler} value={data.price}  type='Number' name='price' placeholder='$20'/>
    </div>
    <button type='submit' className='add-btn'>ADD</button>
  </form>
    </div>
  )
}

export default Add