import React from 'react';
import './Whatsapp.css';
import Card from 'react-bootstrap/Card';
import chooseaphoto from '../../assets/choose-a-photo.jpg';
import contactus from '../../assets/contact-us.jpg';
import ConfirmYourOrder from '../../assets/Confirm-Your-Order.jpg';
import CreationProcess from '../../assets/Creation-Process.jpg';
import PreviewandApproval from '../../assets/Preview-and-Approval.jpg';
import whatsapp from '../../assets/whatsapp.png';

import Delivery from '../../assets/Delivery.jpg';

function Whatsapp() {
  return (
    <div className='containers'>
      <h1 className='heading'>WhatsApp Order Process</h1>
      <div className='grid-containers'>

        <div className='grid-items'>
          <Card style={{ width: '20rem', backgroundColor:'#964B00', height: '350px'}}>
            <Card.Body >
              <img style={{margin:'20px', marginLeft:'120px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={chooseaphoto} alt=""/>
              <Card.Title style={{marginLeft:'90px', fontSize:'20px'}} className="mb-2 text-white">Choose Photo</Card.Title>
             
              <Card.Text className="mb-3 text-gray" style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              Choose a clear and high-resolution photograph of the subject(s) you want to be sketched.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className='grid-items'>
          <Card style={{ width: '20rem' , backgroundColor:'#964B00', height: '350px'  }}>
            <Card.Body>
            <img style={{margin:'20px', marginLeft:'110px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={contactus} alt=""/>
              <Card.Title style={{marginLeft:'40px', fontSize:'20px'}}  className="mb-2 text-white"><a style={{color:'white', textDecoration:'none'}} href='/Whatsapp'>Message on Whatsapp</a></Card.Title>
             
              <Card.Text className="mb-2 text-gray"  style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              Reach out to me through WhatsApp at +91 7025932188. Share the selected photo.
              </Card.Text>
           
            </Card.Body>
          </Card>
        </div>

        <div className='grid-items'>
          <Card style={{ width: '20rem' , backgroundColor:'#964B00',  height: '350px'}}>
            <Card.Body>
            <img style={{margin:'20px', marginLeft:'110px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={ConfirmYourOrder} alt=""/>
              <Card.Title style={{marginLeft:'30px', fontSize:'20px'}} className="mb-2 text-white">Confirm Your Order With <br/> Half Payment in Advance</Card.Title>
              
              <Card.Text className="mb-2 text-gray"  style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              
              I will review your requirements and confirm your order with 
              half payment in advance.
              </Card.Text>
            
            </Card.Body>
          </Card>
        </div>

        <div className='grid-items'>
          <Card style={{ width: '20rem', backgroundColor:'#964B00', height: '400px' }}>
            <Card.Body >
            <img style={{margin:'20px', marginLeft:'120px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={CreationProcess} alt=""/>
              <Card.Title style={{marginLeft:'80px', fontSize:'20px'}} className="mb-2 text-white">Creation Process </Card.Title>
            
              <Card.Text className="mb-2 text-gray" style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              I will diligently work on your portrait sketch, capturing every detail and nuance.
              </Card.Text>
            
            </Card.Body>
          </Card>
        </div>

        <div className='grid-items'>
          <Card style={{ width: '20rem', backgroundColor:'#964B00', height: '400px' }}>
            <Card.Body>
            <img style={{margin:'20px', marginLeft:'120px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={PreviewandApproval} alt=""/>
              <Card.Title style={{marginLeft:'60px', fontSize:'20px'}}  className="mb-2 text-white">Preview and Approval </Card.Title>
            
              <Card.Text className="mb-2 text-gray"  style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              Once your portrait sketch is complete, I will share a preview with you for review. If any adjustments or modifications are needed,I will gladly accommodate your feedback to ensure your complete satisfaction.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>

        <div className='grid-items'>
          <Card style={{ width: '20rem', backgroundColor:'#964B00' ,height: '400px'}}>
            <Card.Body>
            <img style={{margin:'20px', marginLeft:'120px', animation: 'fadeIn 5s'}} width={'60px'} height={'60px'} src={Delivery} alt=""/>
              <Card.Title style={{marginLeft:'114px', fontSize:'20px'}} className="mb-2 text-white">Delivery</Card.Title>
            
              <Card.Text className="mb-2 text-gray" style={{marginLeft:'10px', textAlign:'justify', fontSize:'19px'}}>
              After your approval, I will deliver the final portrait sketch in your chosen format. For digital orders, I will provide a high-resolution file via email.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      </div>
      
      {/*whatsapp */}

      <div style={{margin:'10px' , marginLeft:'600px'}}>
        <a href="https://wa.me/917025932188?text=Hello How can I help you?" target="_blank">
          <img src={whatsapp} width="60" alt='aaaa'/>
        </a>
      </div>
    </div>
  )
}

export default Whatsapp;

           