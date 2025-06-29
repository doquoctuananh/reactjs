import {useContext} from 'react'
import { CartContextObj } from './CartContext'
function ShowJob () {
    const {state,dispatch} = useContext(CartContextObj)
    return (
        <>
            {state.map( (cur,index) => {
                return <li key={index}>
                    {cur}
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