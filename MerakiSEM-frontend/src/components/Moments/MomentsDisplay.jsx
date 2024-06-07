import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './MomentsDisplay.css';

function MomentsDisplay() {

    const {Moments_lists} = useContext(StoreContext);

  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Moments</h1>
    <div className="sketch-display-list">
        {Moments_lists.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>
    
    
 </div>
)
}
  

export default MomentsDisplay