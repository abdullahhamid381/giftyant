import React, { Fragment } from 'react'
import '../scss/ActionShop.scss'
const ActionShop = () => {
  return (
<Fragment>

   <div className="grid-action-shop">
   <div className='latest-product-parent'>
        <img src={'./images/9.jpg'} alt="" />
        <div className='latest-product'>
            <p>Perfume Collection</p>
            <h1>EAU DE PARFUM</h1>
            <button>Shop Now</button>
        </div>
    </div>
   <div className='latest-product-parent'>
        <img src={'./images/9.jpg'} alt="" />
        <div className='latest-product'>
            <p>Perfume Collection</p>
            <h1>EAU DE PARFUM</h1>
            <button>Shop Now</button>
        </div>
    </div>
   </div>
</Fragment>
  )
}

export default ActionShop