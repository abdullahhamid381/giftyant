import React, { Fragment } from 'react'
import Accordian from './Components/Accordian'
import Banner from './Components/Banner'
import Facility from './Components/Facility'
import Navbar from './Components/Navbar'
import ProductCards from './Components/ProductCards'
import ProductGallery from './Components/ProductGallery'
import ProductPage from './Components/ProductPage'
import ProductsFilter from './Components/ProductsFilter'
import SubNavbar from './Components/SubNavbar'
import WhyChoose from './Components/WhyChoose'
import Slider from './Reuseable/Slider'

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <SubNavbar />
      <Slider />
      <Facility />
      <ProductsFilter />
    {/* <ProductPage/> */}
  <WhyChoose/>
    </Fragment>
  )
}

export default App