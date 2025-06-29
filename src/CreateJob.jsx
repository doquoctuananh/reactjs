import {useContext, useState,memo, useEffect, useRef} from 'react'
import {CartContextObj} from './CartContext';
function CreateJob(){
    const {state,dispatch} = useContext(CartContextObj)
    const [job,setJob] = useState('')
    const inputRef = useRef('')
    useEffect( () => {
        inputRef.current.value='';
    },[state] )
    return (
        <div>
            <input 
                ref={inputRef}
                style={{padding:'20px'}}
                value = {job}
                onChange={(e) => setJob(e.target.value) }
                placeholder='Them job'
            />
            <button
                onClick = {() => dispatch({type: 'ADD', payload : job})}
            >
                Them
            </button>
        </div>
    )
}

export default memo(CreateJob);