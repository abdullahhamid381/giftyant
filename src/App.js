import React, { Fragment } from 'react'
import Navbar from './Components/Navbar'
import SubNavbar from './Components/SubNavbar'
import Slider from './Reuseable/Slider'
import Facility from './Components/Facility'
import ProductCards from './Components/ProductCards'
import ContextProducts from './Components/ContextProducts'
import Table from './Components/Table'
import ActionShop from './Components/ActionShop'
import PopularGifts from './Components/PopularGifts'
import Footer from './Components/Footer'
const App = () => {
  return (
    <Fragment>
      {/* */}
     {/*  */}
        {/*
<Navbar /> 
<SubNavbar />
        
      
     */}
     {/* <Facility />
     <ActionShop/> */}

<Slider />
<PopularGifts/>
<ContextProducts/> 
<Footer/>
    </Fragment>
  )
}

export default App