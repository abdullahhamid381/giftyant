import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../scss/ProductsCards.scss'
import {ImCross} from 'react-icons/im'
import { Typography, Rating } from '@mui/material/'
function App() {
  const MAX_CART_ITEMS = 5;
  const MAX_PRODUCT_LIMIT = 5;
  const [items, setItems] = useState([
    { name: 'Watches', price: 400, quantity: `(0)`, image: './images/final/6.png' },
    { name: 'Jewelery', price: 200 , quantity:` (0)`,image: './images/final/7.png' },
    { name: 'Perfume', price: 100, quantity:` (0)`, image: './images/final/8.png', },
    { name: 'Bags', price: 600, quantity: `(0)`, image: './images/final/9.png', },
    { name: 'Watches', price: 800, quantity: `(0)`, image: './images/final/6.png' },
    { name: 'Jewelery', price: 700, quantity: `(0)`, image: './images/final/7.png' },
    { name: 'Perfume', price: 500, quantity: `(0)`, image: './images/final/8.png', },
    { name: 'Bags', price: 750, quantity: `(0)`, image: './images/final/9.png', },
  ]);
  // FOR THE RATING
  const [value, setValue] = useState([])
  const [cartItems, setCartItems] = useState([]);

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('item', JSON.stringify(item));
  };


  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData('item'));
    const cartItem = cartItems.find((i) => i.name === item.name);

    if (cartItems.length >= MAX_CART_ITEMS) {
      alert(`You can only add up to ${MAX_CART_ITEMS} items to the cart.`);
    } else if (cartItem) {
      if (cartItem.quantity >= MAX_PRODUCT_LIMIT) {
        alert(`You can only add up to ${MAX_PRODUCT_LIMIT} of the ${cartItem.name} item.`);
      } else {
        const updatedCartItems = cartItems.map((i) =>
          i.name === cartItem.name ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCartItems(updatedCartItems);
      }
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleIncrement = (item) => {
    const updatedCartItems = cartItems.map((i) =>
      i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
    );
    setCartItems(updatedCartItems);
  };

  const handleDecrement = (item) => {
    const updatedCartItems = cartItems.map((i) =>
      i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
    );
    setCartItems(updatedCartItems.filter((i) => i.quantity > 0));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Fragment>
      <center><h1 style={{ padding: '100px 0 0 0', color: '#444' }}>SALES PRODUCTS</h1></center>
      <div className="App">

        <div className="items">
          {items.map((item) => (
            <div title='Drop to the basket'
              key={item.name}
              className="item"
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
            >
              <div>
              <img src={item.image} alt={item.name} style={{ width: '100%' }} />
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
          ))}
        </div>
        <div className="cart" style={{ position: 'relative' }} onDrop={handleDrop} onDragOver={handleDragOver}>
          <img src={'./images/basket.png'} alt="" />
          <div className="cart-items" >
            {cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <img src={item.image} alt={item.name} style={{ position: 'absolute', top: '70px', width: '30%', left: '120px' }} />
                <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
                  <img src={item.image} alt={item.name} />


                  <p style={{ fontWeight: 'bolder' }}>{item.name}</p>
                  <div className="quantity">
                    <button onClick={() => handleDecrement(item)} className="increment" style={{ position: 'absolute', top: '20px', left: '95px' }}><ImCross/></button>

                    {/* <button onClick={() => handleIncrement(item)} className="increment">+</button> */}
                  </div>
                  <p style={{marginTop:'10px'}}>{`PKR ${item.price * item.quantity}`}</p>
                  <p style={{marginTop:'5px'}}>{item.quantity}</p>
                  
                  </div>


              </div>
            ))}
          </div>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <center> <div className="total-price">{`Total: PKR ${getTotalPrice()} (Proceed To Checkout)`}</div></center>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default App