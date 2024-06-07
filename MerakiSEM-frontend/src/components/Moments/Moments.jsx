import {React ,useContext} from 'react';
import { StoreContext } from '../../context/StoreContext'
import Sketch from '../SketchItem/Sketch'
import './Moments.css';
import Footer from '../Footer/Footer';

function Moments() {

    const {Moments_list} = useContext(StoreContext);


  return (
    <div className='sketch-display' id='sketch-display'>
    <h1>Moments</h1>
    <div className="sketch-display-list">
        {Moments_list.map((item,index) => (
            <Sketch key={index} id={item._id} name={item.name} 
            description={item.description} image={item.image}/>
        ))}
    </div>
    
    <div>
            <button className='viewbtn'><a href='/Moments'>VIEW MORE</a></button>
        </div>


 </div>
  )
}

export default Moments