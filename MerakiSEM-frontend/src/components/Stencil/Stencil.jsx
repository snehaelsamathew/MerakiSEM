import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './Stencil.css';

function Stencil() {

    const {Stencil_list} = useContext(StoreContext);


  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Stencil Art</h1>
    <div className="sketch-display-list">
        {Stencil_list.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>
    <div>
            <button className='viewbtn'><a href='/Stencil'>VIEW MORE</a></button>
        </div>
    
 </div>
  )
}

export default Stencil