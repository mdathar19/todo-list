import React from 'react';
import './TodoList.css';

const TodoList = (props) =>{
    const done = () =>{
        props.listToCon(props.todo)
    }
    
    return(
            <div className='list_item'>
                <h2>{props.todo.task}</h2>
                <h3 onClick={done}> &gt; </h3>
            </div>
        );
}

export default TodoList