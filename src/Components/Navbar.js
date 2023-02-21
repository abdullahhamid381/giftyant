import React, { Fragment } from 'react'
import { AiOutlineShoppingCart,AiOutlineSearch,AiOutlineUser } from 'react-icons/ai'
import '../scss/Navbar.scss'
const Navbar = () => {
  return (
    <Fragment>

      <div className='navbar-parent'>
        <div className='grid'>
          <div className="logo">
            <h1>G I F </h1>
            <h1 className='color'> T Y </h1>
            <h1> A N T </h1>
           
          </div>

          <div className='account-button'>
            <button><a href="">My Account</a></button>
            <button><a href="" style={{borderRight:'1px solid #A8A8A8',paddingRight:'20px'}}>Currency</a></button>
          </div>

          <div className='search'>
            <div>
              <input type="text" placeholder='Search Here'  />
              
              </div>
            <div className='cart'> 

              <AiOutlineShoppingCart className='cart-logo' />
              <AiOutlineUser className='cart-logo' />
            </div>

          </div>

        </div>

      </div>
    </Fragment>
  )
}

export default Navbar