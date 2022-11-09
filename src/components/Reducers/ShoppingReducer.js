import { TYPES } from "../Actions/ShoppingAcctions";

export const shoppingcartInitialState = {
    products:[
        { id: 1, name: "Producto1", price: 100 },
        { id: 2, name: "Producto2", price: 500 }
    ],
    cart: []
}

export function shoppingreducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            console.log(state)
            let newItem = state.products.find(x => x.id === action.payload)
            console.log(newItem)

            return {
                ...state,
                cart: [...state.cart, newItem]
            }
        }

        case TYPES.REMOVE_ONE_FROM_CART: {

            return {
                ...state,
                cart: state.cart.filter(x => x.id !== action.payload) 
            }
        }

        case TYPES.REMOVE_ALL_FROM_CART: {

        }

        case TYPES.CLEAR_CART: {
            return shoppingcartInitialState

        }

        default: return state;
    }
}