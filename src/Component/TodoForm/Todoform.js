import React from 'react';
import { useState } from 'react';
import './Todoform.css';


const Todoform = (props) => {
    const [changedInput,setInput] = useState("")
    const getTodo = () =>{
        // console.log(changedInput);
        props.formToApp(changedInput);
        setInput("")
    }
    const reset = () =>{
        setInput("")
        props.resReqToApp(changedInput)
    }
    
    return(
    <div className='form'>
        <h3>Type your todo... </h3>
        <input type='text' autoFocus value={changedInput} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={reset}> Reset </button>
        <span><button onClick={getTodo}> ADD </button></span>
    </div>
    );
}

export default Todoform