import React, { createContext, Fragment, useEffect, useReducer } from 'react'
import { ProductGalleryDetail } from './Data'
import ProductCards from './ProductCards'
import ProductFilter from './ProductFilter'
import { reducer } from './Reducer'


export const CardsProduct = createContext()

const initialState = {
    items: ProductGalleryDetail,
    totalAmount: 0,
    totlaItems: 0,
}



const ContextProducts = () => {
    const [state, dispatch] = useReducer(reducer, initialState);



    // To RENOVE THE INVIDUAL ELEMENT FROM THE CART
    const removeitem = (id) => {
        return dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })
    }

    // To CLEAR ALL THE ELEMENT THE INVIDUAL ELEMENT FROM THE CART
    const clearcart = () => {
        return dispatch({
            type: 'CLEAR_CART'
        })
    }
    // TO IN INCREMENT THE ITEMS 
    const increment = (id) => {
        return dispatch({
            type: 'INCREMENT',
            payload: id
        })
    }
    // TO IN DECREMENT THE ITEMS 
    const decrement = (id) => {
        return dispatch({
            type: 'DECREMENT',
            payload: id
        })
    }


    // WE USED THE USEEFFECT FOR UPDATE THE DATA 

    useEffect(()=>{
        dispatch({type:'GET_TOTAL'});
    })

    return (
        <Fragment>
            <CardsProduct.Provider value={{ ...state, removeitem, clearcart, increment,decrement }}>
              
                <ProductCards />

            </CardsProduct.Provider>
        </Fragment>
    )
}

export default ContextProducts