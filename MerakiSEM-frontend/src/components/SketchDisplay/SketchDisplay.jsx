import React, { useContext } from 'react'
import './SketchDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import SketchItem from '../SketchItem/SketchItem'

import DigitalDisplay from '../Digital/DigitalDisplay'
import Stencil from '../Stencil/Stencil'
//import Painting from '../Painting/Painting'
import PaintingDisplay from '../Painting/PaintingDisplay'
import Moments from '../Moments/Moments'
//import MomentsDisplay from '../Moments/MomentsDisplay'
//import PaintingDisplay from '../Painting/PaintingDisplay'
//import StencilDisplay from '../Stencil/StencilDisplay'
import Card from 'react-bootstrap/Card';
import BottleArt from '../../assets/BottleArt_10.jpg'
import Flower from '../../assets/FlowerArt_11.jpg'
import Embroidery from '../../assets/Embroidery_18.jpg'

const SketchDisplay = () => {

    const {sketch_list} = useContext(StoreContext)

  
  return (

//CRAFTS

    <div className='sketch-display' id='sketch-display'>
       <h1>Crafts Work</h1>
    {/* <div className="sketch-display-list">
            {sketch_list.map((item, index) => (
                <SketchItem key={`sketch_list_${index}`} id={item._id} name={item.name} 
                description={item.description} price={item.price} image={item.image}/>
            ))}
        </div> */}


<div className="grid-container">

  <div className="grid-item">
    <Card className="cardss">
      <img width={'255px'} height={'300px'} src={BottleArt} alt='' />   
      <Card.Body style={{backgroundColor:'black'}}>
        <h4>Bottle Art</h4>
        <Card.Text >
        This bottleart is done with the use of acrylic paints, 
        tissuepaper, clay, threads.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="grid-item">
    <Card className="cardss">
      <img width={'255px'} height={'300px'} src={Flower} alt='' />  
      <Card.Body style={{backgroundColor:'black'}}>
        <h4>Flower Craft</h4>
        <Card.Text>
        This craft is done with the use of tissuepaper and acrylic paints. 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="grid-item">
    <Card className="cardss">
      <img width={'255px'} height={'300px'} src={Embroidery} alt='' />  
      <Card.Body style={{backgroundColor:'black'}}>
        <h4>Embroidery</h4>
        <Card.Text>
         This is an embroidery done with color threads.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  

</div>



    <div>
            <button className='viewbtn'><a href='/Crafts'>VIEW MORE</a></button>
        </div>

<DigitalDisplay/>
<Stencil/>
 <PaintingDisplay/>
 <Moments/>
 </div>

           ) 

}

export default SketchDisplay
