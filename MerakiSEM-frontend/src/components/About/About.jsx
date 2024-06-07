import React from 'react';
import aboutme from '../../assets/aboutme.mp4';
import './About.css';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import Youtubes from '../../assets/Youtubes.png'
import WhatsAp from '../../assets/WhatsAp.png'

function About() {
  return (



    <section id="intros">
      <div className="introContents">
        <div className="videoContainer">
          <video src={aboutme} autoPlay loop muted className="aboutme" />
          <h5>Get in Touch with Me on</h5>


          <div className='icon'>
  <a href="https://www.facebook.com/profile.php?id=100064235941742" target="_blank" >
    <img width="40px" height="40px" src={facebook} alt="Facebook"/>
  </a>
  <a href="https://www.instagram.com/meraki_sem/" target="_blank" >
    <img width="40px" height="40px" src={instagram} alt="Instagram"/>
  </a>
  <a href="https://youtube.com/@merakisem611?si=EIU1K3Yu5Hr2MKHK" target="_blank">
    <img width="40px" height="40px" src={Youtubes} alt="YouTube"/>
  </a>
  <a href="https://wa.me/917025932188?text=Hello How can I help you?" target="_blank">
    <img width="45px" height="45px" src={WhatsAp} alt="WhatsApp"/>
  </a>
</div>
        </div>


        <div className="textContainer">
        <p className='hea'>About Me</p>
          <p className="introParag">
            I’m Sneha Elsa Mathew, a passionate sketch artist from Pathanamthitta.<br/>
            With a deep love for sketching, 
            I create stunning pieces that touch the hearts of my clients and art lovers alike.<br/><br/>
            Welcome to the world of sketching brought to life by Sneha.
            With a knack for pencil sketches and a strong presence on Instagram,
            I offer the best sketches online, all at affordable prices.
            Whether you’re searching for a pencil sketch or a digital illustration artist near you or looking to order
            handmade crafts online, you’ve come to the right place. Explore my portfolio and let’s
            bring your ideas to paper together.
          </p>
        </div>
      </div>
      <hr/>
    </section>


  ); 
  
}

export default About;
