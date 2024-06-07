import React  ,{ useContext } from 'react'
import './SketchItem.css'
//import { StoreContext } from '../../context/StoreContext';

const Sketch= ({name,description,image}) => {


  return (
    <div className='sketch-item'>
        <div className='sketch-item-img-container'>
            <img width= '282px' height= '300px' className='sketch-item-image' src={image} alt=""/>
      </div>
      <div className='sketch-item-info'>
            <div className='sketch-item-name-rating'>
                <p>{name}</p>

            </div>
            <p className='sketch-item-desc'>
                {description}
            </p>

           {/* <p className='food-item-price'>${price}</p>*/}
        </div>
      </div>
  )
}

export default Sketch