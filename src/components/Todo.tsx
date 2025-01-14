import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const Todo = ({task, taskCompleted, deleteTodo}) => {
    return(
        <div>
            <p className={task.completed ? 'completed' : ''} 
            onClick={() => taskCompleted(task.id)}>{task.task}</p>
            <div>
            <FaCoffee/>
            <FaTrashAlt onClick={()=>deleteTodo(task.id)}/>
            </div>
        </div>

    )
}


export default Todo;