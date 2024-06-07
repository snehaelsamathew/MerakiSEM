import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import SketchItem from '../SketchItem/SketchItem'
import './Crafts.css';



function Crafts() {
  const {sketch_lists} = useContext(StoreContext);
   
  return (
    <div className='sketch-display' id='sketch-display'>
       <h1>Crafts Work</h1>
        <div className="sketch-display-list">
            {sketch_lists.map((item,index) => (
                <SketchItem key={index} id={item._id} name={item.name} 
                description={item.description} price={item.price} image={item.image}/>
            ))}
          </div> 
    
   
     </div>
  )
}

export default Crafts