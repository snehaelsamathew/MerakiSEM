import React from 'react'
import './Header.css'
import cov from '../../assets/cov.png'
//import cover_1 from '../../assets/cover_1.png'


const Header = () => {
  return (
  
    <div className='header'>
         <section id="intro">
          <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Sneha</span><br/>Welcome to MerakiSEM</span>
          <p className='introPara'>Love when you put "something of yourself" into what you're doing.</p>


        <div className='row'>
          <div className='col'>
          <button className='header-contents'><a href='/Crafts'>VIEW MORE</a></button>
          </div>
          <div className='col'>
          <button className='header-contents-bt'><a href='/Whatsapp'>CHAT ON WHATSAPP</a></button>
          </div>
          </div>
          </div> 
          <img src={cov} alt="" className='bg'/> 
          {/*<img src={cover_1} alt="" className='bg'/>*/}
         </section>
         <hr/>
  
    </div>
  )
}

export default Header
