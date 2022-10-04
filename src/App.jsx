import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'

  


export default function App(){
  return(

    <div className="main--div">
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
    
  )
}