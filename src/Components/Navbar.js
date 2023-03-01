import React, { Fragment, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import '../scss/Navbar.scss'
const Navbar = () => {
  const [search, setSearch] = useState(false)
  return (
    <Fragment>

      <div className='navbar-parent'>
        <div className='grid'>
          <div className="logo">
            <h1 className='color'>G I F T </h1>
            
            <h1 style={{marginLeft:'10px'}}> Y A N T </h1>

          </div>

          <div className='account-button'>
            <button><a href="">My Account</a></button>
            <button><a href="" style={{ borderRight: '1px solid white', paddingRight: '20px' }}>Currency</a></button>
          </div>

          <div className='search'>
            <div>
             {
              search? <input type="text" placeholder='Search Here' />:true
             }

            </div>
            <div className='cart'>
              {/* <AiOutlineSearch onClick={()=>setSearch(!search)} className='cart-logo'/> */}
              <AiOutlineShoppingCart className='cart-logo' /><span style={{color:'red'}}>(0)</span>
              <AiOutlineUser className='cart-logo' />
            </div>

          </div>

        </div>

      </div>
    </Fragment>
  )
}

export default Navbar