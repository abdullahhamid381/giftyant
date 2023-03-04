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
import Blog from './Components/Blog'

import ProductsFilter from './Components/ProductFilter'
import { ProductGalleryDetail } from './Components/Data'
import Moving from './Components/Moving'


const App = () => {
const {productitems}=ProductGalleryDetail;
  return (
    <Fragment>
      {/* */}
      {/*  */}
      {/*
<Navbar /> 
<SubNavbar />
        
      
     */}
      {/* 
     <ActionShop/> */}

      <Slider />
      <Facility />
      <PopularGifts />


<ProductCards/>
    
   
      <Blog />
      <Footer />






    </Fragment>
  )
}

export default App