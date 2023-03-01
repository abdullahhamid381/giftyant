import React, { Fragment, useContext, useEffect, useState } from 'react'

import { AiOutlineHeart, AiOutlineEye, AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart } from 'react-icons/ai'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../scss/ProductsCards.scss';
import Navbar from '../Components/Navbar'
import {Typography,Rating } from '@mui/material/'
import { CardsProduct } from './ContextProducts'
import Table from './Table'








const ProductCards = () => {
    const[value,setValue] = useState([])



    // IMPORTING CONTEXT API HERE

    //FOR THE MAP RUNNING IN THE PRODUCTSCARDS
    const { items } = useContext(CardsProduct)

    //FOR THE REMOVE THE ITEMS IN THE PRODUCTSCARDS
    const { removeitem } = useContext(CardsProduct)

    // THIS USED FOR THE CLEAR THE CART
    const { clearcart } = useContext(CardsProduct)

    const { increment } = useContext(CardsProduct)
    const { decrement } = useContext(CardsProduct)



    // DRAG AND DROP START HERE

    const [droppedProducts, setDroppedProducts] = useState([]);

    const handleDragStart = (event, product) => {
        event.dataTransfer.setData('product', JSON.stringify(product));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const product = JSON.parse(event.dataTransfer.getData('product'));
        setDroppedProducts([...droppedProducts, product]);
    };

    return (
        <Fragment>

            <div className="">
                <center><h1 style={{ padding: '100px 0 0 0', color: '#444' }}>SALES PRODUCTS</h1></center>
                <div className='card-basket-parent'>

                    <div className="product-card-grid">


                        {
                            items.map((productcards, index) => {
                                const { id, quantity } = productcards;
                                return (

                                    <div className='cards-parent' draggable
                                        onDragStart={(event) => handleDragStart(event, productcards)} title={'Drop In To The Basket'} style={{ cursor: 'pointer' }}>

                                        <div className='card-gallery'>
                                            <img
                                                key={productcards.id}
                                                src={productcards.img}
                                                alt={productcards.name}

                                            />
                                        </div>
                                        <div className='card-detail'>
                                            <center>
                                                <h3>{productcards.title}</h3>
                                                {/* <p className='gender'>{productcards.gender}</p> */}
                                                <div className='price-parent'>
                                                    <del className='discount'> {productcards.discount} </del>
                                                    <span className='price'> {productcards.Price} </span>
                                                </div>

                                                <div className='stars'>
                                                 
                                                    <Rating style={{fontSize:'20px'}}
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                 
                                                </div>
                                                <br />

                                            </center>
                                        </div>
                                        {/* <div className='button-flex'>
                                        <button className='add-to-cart'><AiOutlineShoppingCart /></button>
                                        <button className='heart' onClick={() => increment(id)}><AiOutlinePlus /></button>
                                        <input type="text" placeholder={quantity} className="increment" />
                                        <button className='heart' onClick={() => decrement(id)}><AiOutlineMinus /></button>
                                        <button className='heart' onClick={() => removeitem(id)}>Remove</button>
    
                                    </div> */}
                                    </div>



                                )

                            })
                        }







                        {/* <div>
                        <button>Checkout</button>
                        <button onClick={() => clearcart()}>Clear All</button>
                    </div> */}


                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {droppedProducts.map((productcards) => (
                                        <td key={productcards.id} style={{ border: '1px solid rgba(128, 128, 128, 0.247)', marginLeft: '10px' }}>
                                            <img src={productcards.img} alt={productcards.name} style={{ width: '50px' }} />
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <div

                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <img src={'./images/basket.png'} alt="" style={{ padding: '50px 0 0 90px' }} />
                        </div>
                    </div>
                </div>










            </div>
        </Fragment>
    );
};
export default ProductCards