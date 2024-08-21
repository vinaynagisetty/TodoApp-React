import { useState } from "react";
import "./todo.css"
function TodoApp(){
    let [todoInput,updateInput]=useState("")
    let [todosList,updateTodos]=useState(
        [
            {
                id:1,
                task:"learn angular"
            },
            {
                id:2,
                task:"learn React"
            }
        ]
    )


   function addTodos(){
   
        if(todoInput===""){
            alert("Enter the text ")
        }
        else{
            let newTodo=[
                ...todosList,
                {
                    id:Math.random(),
                    task:todoInput
                }
            ];
            updateTodos(newTodo);
            updateInput("");
        }
    }
    function deleeTodo(id){
        let updatedValue=todosList.filter(
            (todo)=>{
                return todo.id !==id
            }
        )
        updateTodos(updatedValue);

    }
    return(
        <>
        <h1 className="text-center">React Todo List</h1>
        <div className="container mt-5 w-50">
            <div className="input-group ">
            <input type="text" className="form-control" onChange={(e)=>{
                let value=e.target.value;
                updateInput(value);
            }} value={todoInput}/>
            <button className="btn btn-primary" onClick={()=>{
                         addTodos();
            }}>Add</button>
            </div>
            <ul className="list-group mt-4"> 

            {
                todosList.map( 
                    (item,i)=>{ 
                        return ( <li key={item.id} className="list-group-item">
                        <p>{item.task}</p>
                        <button className="btn float-end" onClick={()=>{
                            deleeTodo(item.id);
                        }}>❌</button>
                    </li>
                    )
                    }
                )
            }
                
            </ul>
        </div>
        </>
    )
}
export default TodoApp;
