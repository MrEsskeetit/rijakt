import { useState } from "react";
 
const tasks = [
    {id:1,text:"zadanie 1"},
    {id:2,text:"zadanie 2"},
    {id:3,text:"zadanie 3"},
    {id:4,text:"zadanie 4"},
    {id:5,text:"zadanie 5"}
 
]
const ToDo = () => {
     const [todos, setToDo]=  useState(tasks)

     const removeTaskHandler = (taskId) => {
        const newTasks = todos.filter( (t) => t.id !== asksId)  
        setToDo(newTasks)    
     }
    return(
    <>
        <h1>Jest komponent todoapp</h1>
        <ul>
            {
                tasks.map( t => (
                    <li style={ {color:"red", fontSize:"19px", marginBottom:"10px", backgroundColor:"#000814"} }key={t.id}>
                        <span style={ {marginRight:"10px"}}>{t.text}</span>

                        <button onClick={ () => removeTaskHandler(t.id)}>
                            usun zadanie
                        </button>
                    </li>
                ))
            }
        </ul>
    </>
    )
}
 
export default ToDo