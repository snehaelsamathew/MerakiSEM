import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar'>
     <img width={'100px'} height={'90px'} className='logo' src={assets.logo} alt=''/>
     <img  width={'100px'} height={'100px'} className='profile' src={assets.profile_image} alt=""/>
    </div>
  )
}

export default Navbar