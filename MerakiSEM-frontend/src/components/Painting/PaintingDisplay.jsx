import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './PaintingDisplay.css';

function PaintingDisplay() {

    const {Painting_lists} = useContext(StoreContext);

  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Paintings</h1>
    <div className="sketch-display-list">
        {Painting_lists.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>

    <div>
            <button className='viewbtn'><a href='/Painting'>VIEW MORE</a></button>
        </div>
    
 </div>
)
}
  

export default PaintingDisplay