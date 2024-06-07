import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './StencilDisplay.css';

function StencilDisplay() {

    const {Stencil_lists} = useContext(StoreContext);

  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Stencil Art</h1>
    <div className="sketch-display-list">
        {Stencil_lists.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>
   
    
 </div>
)
}
  

export default StencilDisplay