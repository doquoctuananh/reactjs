import {useContext, useState,memo, useEffect, useRef} from 'react'
import {CartContextObj} from './CartContext';
function CreateJob(){
    const {state,dispatch} = useContext(CartContextObj)
    const [job,setJob] = useState('')
    const [price,setPrice] = useState()
    
    useEffect( () => {
        setJob('')
        setPrice('')
    },[state] )
    return (
        <div>
            <input 
                style={{padding:'20px'}}
                value = {job}
                onChange={(e) => setJob(e.target.value) }
                placeholder='Them job'
            />

            <input 
                style={{padding:'20px'}}
                value = {price}
                type='number'
                onChange={(e) => setPrice(e.target.value) }
                placeholder='Them gia'
            />

            <button
                onClick = {() => dispatch({type: 'ADD', payload : job, price:price})}
            >
                Them
            </button>
        </div>
    )
}

export default memo(CreateJob);