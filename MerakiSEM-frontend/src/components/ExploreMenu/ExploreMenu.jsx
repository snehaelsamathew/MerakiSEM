import React from 'react'
import './ExploreMenu.css';
import craft from '../../assets/craft.png';
import DigitalIllustration_38 from '../../assets/DigitalIllustration_38.png';
import stencil from '../../assets/stencil.png';
import moments from '../../assets/moments.png';
import Sketch_11 from '../../assets/Sketch_11.png';


const ExploreMenu = () => {
  return (
    <div className='explore-sketch' id='explore-sketch'>
        <h1>Explore My World</h1>
        <p className='explore-sketch-text'>I’m Sneha Elsa Mathew, a passionate sketch 
        artist. With a deep love for sketching, I offer the best sketches online, 
        all at affordable prices. Whether you’re searching for a sketch artist 
        looking to order handmade sketches online, you’ve come to the right place. 
        Explore my portfolio and let’s bring your ideas to paper together.</p>


             <div className='explore-sketch-list-container'>

             <div  className='explore-sketch-item'>
                <a href="/Crafts"> <img width={'250px'} height={'250px'} src={craft} href="/Crafts" alt=""/></a>
                 <div className='explore-sketch-caption'><a href="/Crafts">Crafts </a> </div> 
              </div>
               
              <div className='explore-sketch-item'>
              <a href="/Digital"> <img width={'250px'} height={'250px'} src={DigitalIllustration_38} alt=""/></a>
                 <div className='explore-sketch-caption'><a href="/Digital">Digital Painting </a> </div> 
              </div>
                 
              <div className='explore-sketch-item'>
              <a href="/Stencil">  <img width={'250px'} height={'250px'} src={stencil} alt=""/></a>
                 <div className='explore-sketch-caption'><a href="/Stencil">StencilArt</a> </div> 
              </div>
                 
                       
              <div className='explore-sketch-item'>
              <a href="/Painting"> <img width={'250px'} height={'250px'} src={Sketch_11} alt=""/></a>
              <div className='explore-sketch-caption'><a href="/Painting"> Painting</a>  </div>
              </div>
              
              <div className='explore-sketch-item'>
              <a href="/Moments">  <img width={'250px'} height={'250px'} src={moments} alt=""/></a>
              <div className='explore-sketch-caption'><a href="/Moments">Moments </a> </div>
              </div>
             
           
                 
                
   </div>
       </div>
                  
          
         

    
  )
}


export default ExploreMenu
