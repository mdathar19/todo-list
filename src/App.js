import './App.css';
import React,{ useEffect, useState} from 'react';
import Todoform from './Component/TodoForm/Todoform';
import TodoListCon from './Component/TodoList Container/TodoListCon';
import DoneCon from './Component/Done Con/DoneCon';

const todo  = []

const App = ()=>{
   useEffect(()=>console.log("it renders"))
  const [realTodo,setRealTodo] = useState(todo)
  const getForm = (recievedTodoForm) =>{
    if(recievedTodoForm.length>1){
      let text = recievedTodoForm
    const dummy_obj = { task:text,stage:0}
    const newTodo = [dummy_obj,...realTodo]
    console.log(newTodo)
    setRealTodo(newTodo)
    }
  }
  
  
  const gotTheDone =async (taskDone) =>{
    // console.log(taskDone)
    const dummy_todo = realTodo
    dummy_todo.map((task)=>(task===taskDone)?  task.stage=1:null)
    // console.log(dummy_todo)
    await setRealTodo([]);
    await setRealTodo(dummy_todo);
  }
  const gotDelete = async(gotDeleted)=>{
    console.log(gotDeleted)
    const dummy_todo = realTodo
    // console.log(dummy_todo)
    const newTodo = dummy_todo.filter((delName)=>delName.task!==gotDeleted)
    console.log(newTodo)
    await setRealTodo([]);
    await setRealTodo(newTodo)
  }
  const resetTodo = async(dummy) =>{
    await setRealTodo([])
    
  }
  
  return(
    <div className='Appbody'>
        <h1  id='h1'> Manage your Todo </h1>
      <div >
      <Todoform resReqToApp={resetTodo} formToApp={getForm} />
      <DoneCon appToDone={realTodo} delItemToApp={gotDelete}/>
      <TodoListCon  listConToApp={gotTheDone} appTocon={realTodo} />
      
    </div>
    </div>
    
    
    
  );
}

export default App;
