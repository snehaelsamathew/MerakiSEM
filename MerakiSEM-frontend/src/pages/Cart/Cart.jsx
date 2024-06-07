
import React, { useContext , useEffect  } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import Carts from '../../components/Crafts/Carts';
import CartTotalPage from './CartTotalPage';


const Cart = () => {
  const { cartItems, sketch_list, decrementQuantity } = useContext(StoreContext);

  

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {sketch_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{quantity}</p>
                  <p>₹{item.price * quantity}</p>
                  <p onClick={() => decrementQuantity(item._id)} className='cross'>X</p>
                </div>
               
                <hr />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>
 
      <Carts/>  
      
<CartTotalPage/>
   
    </div>
  );
};

export default Cart;
