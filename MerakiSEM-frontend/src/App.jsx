import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home'
//import Cart from './pages/Cart/Cart'
//import Placeorder from './pages/PlaceOrder/Placeorder';
import SketchDisplay from './components/SketchDisplay/SketchDisplay';
import Crafts from './components/Crafts/Crafts';
import About from './components/About/About';
import {Navigate} from 'react-router-dom';
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import Digital from './components/Digital/Digital';
import Painting from './components/Painting/Painting';
import StencilDisplay from './components/Stencil/StencilDisplay';
//import Moments from './components/Moments/Moments';
import MomentsDisplay from './components/Moments/MomentsDisplay';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
//import Cart from './pages/Cart/Cart';
import Carts from './components/Crafts/Carts';
import Whatsapp from './components/Whatsapp/Whatsapp';
import Counter from './components/Counter/Counter';
import Placeorder from './pages/PlaceOrder/Placeorder';
import CartTotalPage from './pages/Cart/CartTotalPage';



const App = () => {

  const [showLogin,setShowLogin]=useState(false)

  return (
    <>

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}


    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
     <Route path={'/'} element={<Home/>}/>
     <Route path={'About'} element={<About/>}/>
     <Route path={'Counter'} element={<Counter/>}/>
     <Route path={'Exploremenu'} element={<ExploreMenu/>}/>
     <Route path={'Sketchdisplay'} element={<SketchDisplay/>}/>
     <Route path={'Crafts'} element={<Crafts/>}/>
     <Route path={'Digital'} element={<Digital/>}/>
     <Route path={'Stencil'} element={<StencilDisplay/>}/>
     <Route path={'Painting'} element={<Painting/>}/>
     <Route path={'Moments'} element={<MomentsDisplay/>}/>
    <Route path={'Cart'} element={<Carts/>}/>
     <Route path={'Carts'} element={<Carts/>}/>
     <Route path={'order'} element={<Placeorder/>}/>
     <Route path={'Whatsapp'} element={<Whatsapp/>}/>
     <Route path={"/cart-total"} element={<CartTotalPage/>}/>
    
     <Route path={'*'} element={<Navigate to={'/'}/>}/>   {/*not requested page to redirct to homepage*/}
    </Routes>
  <Footer/>
  </div>
   </>
  )
}

export default App

