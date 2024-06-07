import React, {useContext} from 'react'
import './PlaceO.css'
import { StoreContext } from '../../context/StoreContext'


function PlaceO() {

    const { getTotalCartAmount } = useContext(StoreContext);
    

    const subtotal = getTotalCartAmount() || 0;
    const deliveryFee = subtotal === 0 ? 0 : 50;
    const total = subtotal + deliveryFee;
  return (
    <form className='place-order'>
      <div className='place-order-left'>
          <p className='title'>Delivery Information</p>
      <div className='multi-fields'>
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
      </div>
          <input type='text' placeholder='Email address'/>
          <input type='email' placeholder='Street'/>
     <div className='multi-fields'>
         <input type='text' placeholder='City'/>
         <input type='text' placeholder='State'/>
     </div>
     <div className='multi-fields'>
         <input type='text' placeholder='Zip code'/>
         <input type='text' placeholder='Country'/>
     </div>
         <input type='text' placeholder='Phone'/>
     </div>


     <div className='place-order-right'>
     <div className='cart-total'>
        <h1>Cart Totals</h1>
        <div className='cart-total-details'>
          <p>Subtotal: ₹ {subtotal}</p>
          <hr />
          <p>Delivery Fee: ₹ {deliveryFee}</p>
          <hr />
          <p>Total: ₹ {total}</p>
        </div>
        <button >PROCEED TO PAYMENT</button>
      </div>
     </div>
   </form>
  )
}

export default PlaceO