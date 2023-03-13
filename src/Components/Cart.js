import React, { Fragment, useState } from 'react'
import { ProductGalleryDetail } from './Data'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Padding } from '@mui/icons-material';

const Cart = () => {

    const [cardData, setCardData] = useState({
        name: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvc: '',
        country: '',
        region: '',
        email: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCardData({
          ...cardData,
          [name]: value
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submission
      };
    const [cartItems, setCartItems] = useState([])
    return (
        <Fragment>

            <div className='cart-items'>
                <div className="cart-items-header">

                    {cartItems.length === 0 && (
                        <div className='cart-items-empty'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{width:'30%',margin:'80px auto'}}>
        <h1 style={{margin:' 0 auto 20px auto'}}>Payment Gateway</h1>
        <TextField
          Account Name
          id="outlined-required"
          label="Account Name"
          defaultValue="Account Name"
        />
       
        <TextField
          
          id="outlined-disabled"
          label="CVC"
          defaultValue="CVC"
        />
          <br />
        <TextField
          id="outlined-password-input"
          label="Account Number"
          type="password"
          autoComplete="current-password"
        />
         
         <TextField
          id="outlined-password-input"
          label="CNIC"
          type="number"
          autoComplete="current-password"
        />
          <br />
        <TextField
          id="outlined-number"
          label="Email"
          type="email"
         defaultValue="Email"
          
        />
       
      
        <TextField
          id="outlined-helperText"
          label="Country"
       defaultValue="Country"
        />

        <button style={{width:'88%',marginLeft:'10px',margin:'20px 0 0 10px',background:'red',color:'white',padding:'10px 0',border:'none',}}>Check Out</button>
      </div>
      
    
    </Box>
                        </div>

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