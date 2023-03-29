import './App.css';
import { useState } from 'react';
import {BsTrash3Fill} from 'react-icons/bs';

function App() {
   const[todolist,settodolist]=useState([]);
   const[newtask,setnewtask]=useState("");

   const handlechange = (piyu)=>{
   setnewtask(piyu.target.value);
   }

   const addtask = ()=>{
    const task ={
      id : todolist.length===0 ? 1: todolist[todolist.length-1].id+1,
      taskname:newtask,
    };
    settodolist([...todolist,task]);
   }

   const deletetask = (id) =>{
 settodolist(todolist.filter((task)=> task.id !== id ));
   }
    return(
<div>
<div id="heading">
      <h2>TO-DO-LIST</h2>
    </div>

<div className="App"> 
         <div id="to-do-form">
          <div className='addTask'>
            <input onChange={handlechange} placeholder="Enter the Task"type="text"/>
            <button onClick={addtask}>Add</button>
            {/* {newtask} */}
          </div>

          <div className='list'>
         {todolist.map((task)=>(
           <div id='display'>
             <h1>{task.taskname}</h1>
             <button onClick={() => deletetask(task.id)}><BsTrash3Fill /></button>
           </div>
         ))}
          </div>
     </div>

        </div>
       </div> 
    );
   }

export default App;