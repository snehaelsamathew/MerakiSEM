import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './Digital.css';

function Digital() {

    const {Digital_list} = useContext(StoreContext);


  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Digital Paintings</h1>
    <div className="sketch-display-list">
        {Digital_list.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>

    
 </div>
  )
}

export default Digital