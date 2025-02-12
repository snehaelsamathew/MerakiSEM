import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './Painting.css';


function Painting() {

    const {Painting_list} = useContext(StoreContext);


  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Paintings</h1>
    <div className="sketch-display-list">
        {Painting_list.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description}  image={item.image}/>
        ))}
    </div>
    
    
 </div>
  )
}


export default Painting