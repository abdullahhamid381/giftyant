export const reducer = (state, action) => {

    // --------------THIS FOR THE IF ITEM ID IS MATCH SO IT WILL REMOVE------------------------//
    if (action.type === 'REMOVE_ITEM') {



        // --------------THIS FOR THE IF ITEM ID IS NOT MATCH  SO IT WILL NOT  REMOVE------------------------//
        return {



            ...state,
            items: state.items.filter((curElem) => {
                return curElem.id !== action.payload;
            })
        }
    }


    //this is for the clear all the items from the cart

    if (action.type === 'CLEAR_CART') {
        return { ...state, items: [] };

    }


    // this is used for the increment the items/

    if (action.type === 'INCREMENT') {
        let updateitems = state.items.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 }
            }
            return curElem
        });
        return { ...state, items: updateitems }
    }


    // this is used for the decrement the items/

    if (action.type === 'DECREMENT') {
        let updateitems = state.items.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity - 1 }
            }
            return curElem
        }).filter((curElem) => {
            return curElem.quantity !== 0;
        });
        return { ...state, items: updateitems }
    }


    // TOTAL ITMES SECTION 

    if (action.type === 'GET_TOTAL') {
        let { totlaItems } = state.items.reduce((accum, curVal) => {
            let { quantity } = curVal
            accum.totlaItems += quantity;
            return accum;
            console.log(accum)
        },
        
            {
                totlaItems: 0,
            });
        return { ...state, totlaItems };
    }
    return state;
}