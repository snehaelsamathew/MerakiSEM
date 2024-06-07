import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './CartTotalPage.css';
import { useNavigate } from 'react-router-dom';

const CartTotalPage = () => {
  const { getTotalCartAmounts } = useContext(StoreContext);

   
  const subtotal = getTotalCartAmounts() || 0;   //Ensure subtotal is 0 if getTotalCartAmounts returns undefined or null
  const deliveryFee = subtotal === 0 ? 0 : 50; // Set delivery fee based on the subtotal
  const total = subtotal + deliveryFee;

  console.log("Subtotal:", subtotal);
  console.log("Total:", total);

  const navigate=useNavigate()

  return (
    <div className='cart-bottom'>
      <div className='cart-total'>
        <h1>Cart Totals</h1>
        <div className='cart-total-details'>
          <p>Subtotal: ₹ {subtotal}</p>
          <hr />
          <p>Delivery Fee: ₹ {deliveryFee}</p>
          <hr />
          <p>Total: ₹ {total}</p>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>

      <div className='cart-promocode'>
        <div>
          <p>If you have a promocode, Enter it here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promocode'/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotalPage;
