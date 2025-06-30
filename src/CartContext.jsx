import { createContext,useReducer,memo, useCallback, useMemo } from "react";
import CreateJob from "./CreateJob";
import ShowJob from "./ShowJob";
import CartJob from "./CardJob";

export const CartContextObj = createContext();
export const ShowCart = createContext();
export const CartContextValue = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case 'ADD': {
            let newState = {
                name: action.payload,
                price: action.price
            }
            return [...state,newState]
        }
        case 'DELETE':{
            let newState = state.filter((acc,index) => index !== parseInt(action.payload))
            return newState
        }
        default: 
            throw new Error('Invalid action')
    }
}

const reducerCart = function (cart,action){
    switch(action.type){
        case 'ADD_CART': {
            let findIndex = cart.findIndex((cur,index) => cur.name === action.payload)
            if(findIndex === -1){
                let addProductInCart = {
                    name: action.payload,
                    quantity: 1
                }
                return [...cart,addProductInCart]
            }
            else{
                return cart.map((item, idx) =>
                    idx === findIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
        }
        default:
            return cart;
    }
} 
function CartContext (){
    const [state,dispatch] = useReducer(reducer,[])
    const [cart,dispatchCart] = useReducer(reducerCart,[])
    const totalPriceInCart = useCallback(() => {
        return cart.reduce((acc,cur,index) => {

            let findProduct = state.find((product,index) => {
                return product.name === cur.name;
            })
            if(findProduct){
                acc += findProduct.price * cur.quantity;
            }

            return acc;
        },0)
    },[cart])

    const totoalQuantityInCart = useMemo(() => {
        return cart.reduce((acc, cur,index) => acc + cur.quantity, 0);
    }, [cart]);

    return(
        <CartContextObj.Provider value = {{state,dispatch}}>
            <CreateJob />
            <ShowCart.Provider value = {{cart,dispatchCart}}>
                <ShowJob />
            </ShowCart.Provider>
            <CartContextValue.Provider value = {{cart,totalPriceInCart,totoalQuantityInCart}}>
                <CartJob />
            </CartContextValue.Provider>
        </CartContextObj.Provider>
    )
}

export default  CartContext; 