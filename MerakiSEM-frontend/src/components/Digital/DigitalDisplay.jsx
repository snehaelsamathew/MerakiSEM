import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './DigitalDisplay.css';


function DigitalDisplay() {

    const {Digital_lists} = useContext(StoreContext);

  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Digital Paintings</h1>
    <div className="sketch-display-list">
        {Digital_lists.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>

    <div>
            <button className='viewbtn'><a href='/Digital'>VIEW MORE</a></button>
        </div>
 </div>
)
}

export default DigitalDisplay