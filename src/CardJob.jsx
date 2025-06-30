import { useContext, useState } from "react";
import { CartContextValue } from "./CartContext";
function CartJob(){
    const {cart,totalPriceInCart,totoalQuantityInCart} = useContext (CartContextValue)
    const [show,setShow] = useState(false);
    return (
        <div>
            <button
                onClick = {() => setShow(!show)}
            >
                {show === false ? 'Xem gio hang' : 'An gio hang'}
            </button>
            {show === true ? <p>Tong gia: {totalPriceInCart()}</p> : null }
            {show === true ? <p>Tong so luong: {totoalQuantityInCart}</p> : null }
            {show === true ? cart.map((cur) => <p>Ten San pham : {cur.name}  - quantity : {cur.quantity}</p>) : null}
            
        </div>
    )
}

export default CartJob;