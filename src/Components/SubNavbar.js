import React, { Fragment } from 'react'
import '../scss/SubNavbar.scss'
const SubNavbar = () => {
  return (
    <Fragment>
<div className='sub-navbar-parent'>
    <button><a href="" className='active'>HOME</a></button>
    <button><a href="">ABOUT</a></button>
    <button><a href="">CONTACT</a></button>
    <button><a href="">PRODUCTS</a></button>
    <button><a href="">PRIVACY POLICY</a></button>
</div>

    </Fragment>
  )
}

export default SubNavbar