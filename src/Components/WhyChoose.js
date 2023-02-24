import React, { Fragment } from 'react'
import Accordian from './Accordian'
import Review from './Review'
import '../scss/WhyChoose.scss'
const WhyChoose = () => {
  return (
    <Fragment>
        <div className='why-choose-grid'>
         
                {/* <Accordian/>
       
            
                <Review/> */}
                <img src={'./images/faq.png'} alt="" style={{width:'90%',margin:'auto'}} />
            
        </div>
    </Fragment>
  )
}

export default WhyChoose