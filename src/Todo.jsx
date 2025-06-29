import {useReducer,useState,useRef,useEffect} from 'react'

const reducer = (job,action) => {
    switch(action.type){
        case 'add': {
            if(action.payload !== '' ) return [...job,action.payload];
            action.set=''
            break;
            
        }
        case 'delete' : {
            const newJob = job.filter((cur,index) =>  index != parseInt(action.payload))
            return newJob;
        }
        default:
            throw new ('Invalid action')
    }
}

function ToDo() {
    const [job,dispatch] = useReducer(reducer,[]);
    const [state,setState]  = useState('');
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.value = ''
    },[job])
    return (
        <>
            <input  
                ref={inputRef}
                value={state}
                style={{
                    padding : '20px',
                    marginTop : '12px'
                }}
                placeholder = "Them cong viec"
                onChange = {(e) => setState(e.target.value)}
            />
            <button
                onClick={() => dispatch({
                    type:'add',
                    payload:state,
                    set: state
                })}
            >
                ADD
            </button>
            
            <ul>
                {job.map((cur,index) => {
                    return <li key={index}>
                        {cur}
                        <button
                            style={{
                                marginLeft:'8px'
                            }}
                            onClick={() => dispatch({
                                type:'delete',
                                payload:index
                            })}
                        >
                            X
                        </button>
                    </li>
                })}
            </ul>
        </>
    )
}

export default ToDo