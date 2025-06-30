import {useContext} from 'react'
import { CartContextObj, ShowCart } from './CartContext'
function ShowJob () {
    const {state,dispatch} = useContext(CartContextObj)
    const {cart,dispatchCart} = useContext(ShowCart);
    return (
        <>
            {state.map( (cur,index) => {
                return <li key={index}>
                    <span>Name : {cur.name} - </span>
                    <span>Price : {cur.price}</span>
                    <button
                        style = {{
                            margin: '4px 8px'
                        }}
                        onClick = {() => dispatchCart({type:'ADD_CART',payload:cur.name})}
                    >
                        Them gio hang
                    </button>
                    <button
                        onClick = {() => dispatch({type:'DELETE',payload: index})}
                    >
                        Xoa
                    </button>
                </li>
            } )}
        </>
    )

}

export default ShowJob