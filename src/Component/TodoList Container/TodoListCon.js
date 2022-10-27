import './TodoListCon.css';
import TodoList from '../TodoList/TodoList';
import React from 'react';

const TodoListCon = (props) =>{
    
    const taskDone = (gotIt) =>{
        props.listConToApp(gotIt)
    }
    
    
    return(
        <div className='list'>
             <h1>Todo List</h1>
            {
                
                props.appTocon.map((TODO)=>(TODO.stage===0)? <TodoList key={Math.random()} listToCon={taskDone} todo={TODO}/>:null)
                
                
            }
            
        </div>
    );
}

export default TodoListCon