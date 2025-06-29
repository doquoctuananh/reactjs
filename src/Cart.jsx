import {useState} from "react"
export function Cart({cartRef,totalQuantityProduct,totalMoneyCart}){
    const [state,setState] = useState(true);
    
    
    let content = state === true ? 'xem gio hang' : 'An gio hang'
    return (
        <>
        
        <div>
                
                <button onClick={() => setState(!state)}>{state === true ? 'Xem gio hang' : 'An gio hang'}</button>
                {state ===true ? '' : <p>Tong san pham: {totalQuantityProduct}</p>}
                {state ===true ? '' : <p>Tong tien: {totalMoneyCart}</p>}
        </div>
        </>
    )
}

