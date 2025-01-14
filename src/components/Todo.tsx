import React from "react";
import { FaCoffee } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";



const Todo = ({task, taskCompleted, deleteTodo}) => {
    return(
        <div className="task">
            <p className={task.completed ? 'completed' : ''} 
            onClick={() => taskCompleted(task.id)}>{task.task}</p>
            <div>
            <FaCoffee className="flex mx-60 mb-3 size-6"/>
            <FaTrashAlt className="flex mx-60 size-6" onClick={()=>deleteTodo(task.id)}/>
            </div>
        </div>

    )
}


export default Todo;