import { createContext,useReducer,memo } from "react";
import CreateJob from "./CreateJob";
import ShowJob from "./ShowJob";

export const CartContextObj = createContext();
const reducer = (state,action) => {
    switch(action.type){
        case 'ADD': {
            return [...state,action.payload]
        }
        case 'DELETE':{
            let newState = state.filter((acc,index) => index !== parseInt(action.payload))
            return newState
        }
        default: 
            throw new Error('Invalid action')
    }
}

function CartContext (){
    const [state,dispatch] = useReducer(reducer,[])
    return(
        <CartContextObj.Provider value = {{state,dispatch}}>
            <CreateJob />
            <ShowJob />
        </CartContextObj.Provider>
    )
}

export default  CartContext; 