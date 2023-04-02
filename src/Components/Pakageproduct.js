import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/ProductsCards.scss'
import {ImCross} from 'react-icons/im'
import { Typography, Rating } from '@mui/material/'
const Pakageproduct = () => {
    const [items, setItems] = useState([
        { name: 'Glasses', price: 400, quantity: `(0)`, image: './images/final/2m.jpg' },
        { name: 'Watches', price: 200, quantity: ` (0)`, image: './images/final/1m.jpg' },
        { name: 'Perfume', price: 100, quantity: ` (0)`, image: './images/final/15m.jpg', },
        { name: 'Bags', price: 600, quantity: `(0)`, image: './images/final/6m.jpg', },
        { name: 'Glasses', price: 400, quantity: `(0)`, image: './images/final/2m.jpg' },
        { name: 'Watches', price: 200, quantity: ` (0)`, image: './images/final/1m.jpg' },
        { name: 'Perfume', price: 100, quantity: ` (0)`, image: './images/final/15m.jpg', },
        { name: 'Bags', price: 600, quantity: `(0)`, image: './images/final/6m.jpg', },
    ]);

    const [value, setValue] = useState([])
    return (
        <Fragment>

            <center><h1 style={{ padding: '60px 0 100px 0', color: '#444' }}>PACKAGED PRODUCT</h1></center>

            <div style={{width:'80%',margin:'auto',display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',justifyContent:"center",gap:'40px'}}>
            {items.map((item) => (
          <center>

<div
            >
              <div>
              <img src={item.image} alt={item.name} style={{ width: '100%',border:'1px solid rgba(128, 128, 128, 0.184)' }} />
              </div>
              <p style={{ fontWeight: 'bolder', marginTop: '20px' }}>{item.name}</p>
              <p style={{ paddingTop: '10px', fontWeight: 'bolder', color: 'red', fontSize: '18px' }}>{`PKR ${item.price}`}</p>
              <div className='stars' style={{ margin: '10px 0 0 0', }}>

                <Rating style={{ fontSize: '18px' }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />

              </div>
            </div>
          </center>
          ))}
            </div>
        </Fragment>
    )
}

export default Pakageproduct