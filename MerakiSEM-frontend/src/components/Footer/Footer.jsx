import React from 'react'
import './Footer.css'
import assets from '../../assets/logo.png';

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer' id='footer'>
         <div className='footer-content'>
         <div className='footer-content-left'>
               <img width="100px" height={'100px'} src={assets} alt=""/>
               <p>Handmade portrait sketch - a beautiful gift for your loved ones.</p>

    <div className='footer-social-icon' >
               <div className='footer-social-fb'>
               <a href="https://www.facebook.com/profile.php?id=100064235941742" target="_blank" >
              <CiFacebook  size="2em"/> </a>
              </div>
              <div className='footer-social-insta'>
              <a href="https://www.instagram.com/meraki_sem/" target="_blank" >
               <FaInstagram   size="2em" /></a>
               </div>
               <div className='footer-social-youtube'>
               <a href="https://youtube.com/@merakisem611?si=EIU1K3Yu5Hr2MKHK" target="_blank">
               <CiYoutube  size="2em" /> </a>
               </div>
               <div className='footer-social-whatsapp'>
               <a href="https://wa.me/917025932188?text=Hello How can I help you?" target="_blank">
               <FaWhatsapp  size="2em" /> </a>
               </div>
               </div> 
         </div>
         <div className='footer-content-center'>
            <h4>USEFUL LINKS</h4>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
         </div>
         <div className='footer-content-right'>
         <h4>GET IN TOUCH</h4>
         <ul>
            <li>7025932188</li>
            <li>snehamathew278@gmail.com</li>
         </ul>
         </div>
               
         </div>
  <hr/>
  <p className='footer-copyright'>
    Copyright 2024 @ MerakiSEM - All Right Reserved.
  </p>
    </div>
  )
}

export default Footer