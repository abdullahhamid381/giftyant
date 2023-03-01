import React, { Fragment } from 'react'
import '../scss/PopularGifts.scss'
const PopularGifts = () => {
    return (
        <Fragment>
            <div className='popular-parent'>
                <div className='product-gift-grid'>
                    <div style={{overflow:'hidden',boxSizing:'border-box'}}>
                        <img src={'./images/final/1.jpg'} alt="" className='product-gift-img' />
                        <img src={'./images/final/3.jpg'} alt="" className='product-gift-img' />
                    </div>
                    <div>
                        <img src={'./images/final/2.jpg'} alt="" className='product-gift-img' />
                        <img src={'./images/final/4.jpg'} alt="" className='product-gift-img' />
                    </div>
                </div>

               <center>
               <div className='conact'>
                    <img src={'./images/final/5.jpg'} alt="" />
                    <div className='contact-call'>
                        <p>Call for the support</p>
                        <h1>084 - 1900 - 1994</h1>
                        <h6>We are online 24/7</h6>
                    </div>
                </div>
               </center>
            </div>
        </Fragment>
    )
}

export default PopularGifts