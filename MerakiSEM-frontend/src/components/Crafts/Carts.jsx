import React, { useContext } from 'react';
import './Carts.css';
import { StoreContext } from '../../context/StoreContext';
//import CartTota from './CartTota';

//import CartTotalPage from '../../pages/Cart/CartTotalPage';
//import CartTota from './CartTota';
import CartTotalPage from '../../pages/Cart/CartTotalPage';


const Carts = () => {
  const { cartItems, sketch_lists, decrementQuantity,url} = useContext(StoreContext);


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
    
        {sketch_lists.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt={item.name} />
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
<CartTotalPage/>
    </div>
  );
};

export default Carts;
