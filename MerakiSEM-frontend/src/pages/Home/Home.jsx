import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import SketchDisplay from '../../components/SketchDisplay/SketchDisplay'
import About from '../../components/About/About'
import Counter from '../../components/Counter/Counter'


const Home = () => {

 // const [category ,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <About/>
      <Counter/>
      <ExploreMenu/>
      <SketchDisplay/>
     
      
    </div>
  )
}

export default Home
