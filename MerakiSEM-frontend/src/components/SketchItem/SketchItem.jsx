import React, { useContext } from 'react';
import './SketchItem.css';
import add_icon_white from '../../assets/add_icon_white.png';
import remove_icon_red from '../../assets/remove_icon_red.png';
import add_icon_green from '../../assets/add_icon_green.png';
import { StoreContext } from '../../context/StoreContext';

const SketchItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='sketch-item'>
      <div className='sketch-item-img-container'>
        <img width='282px' height='300px' className='sketch-item-image' src={`${url}/images/${image}`} alt={name} />
        {
          cartItems && cartItems[id] > 0 ?
            <div className='sketch-item-counter'>
              <img onClick={() => removeFromCart(id)} src={remove_icon_red} alt="remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={add_icon_green} alt="add" />
            </div>
            :
            <img className='add' onClick={() => addToCart(id)} src={add_icon_white} alt="add" />
        }
      </div>
      <div className='sketch-item-info'>
        <div className='sketch-item-name-rating'>
          <p>{name}</p>
        </div>
        <p className='sketch-item-desc'>
          {description}
        </p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  );
};

export default SketchItem;
