import React, { Fragment, useState } from 'react'
import { ProductGalleryDetail } from './Data'

const Cart = () => {
    const [cartItems,setCartItems]= useState([])
    return (
        <Fragment>

            <div className='cart-items'>
                <div className="cart-items-header">
                    {cartItems.length === 0 && (
                        <div className='cart-items-empty'>No Items Are Added</div>
                    )}
                    {
                        cartItems.map((items) => {
                            <div key={items.id} className='cart-items-list'>
                                <img src={items.img} className='cart-items-image' alt={items.name} />
                            </div>
                        })
                    }
                </div>

            </div>
        </Fragment>
    )
}

export default Cart