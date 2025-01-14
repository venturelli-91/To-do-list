import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

uuidv4();

interface TodoState {
    id: string;
    task: string;
    completed: boolean;
}


const TodoWrap: React.FC = () => {
    const [todos, setTodos] = useState<TodoState[]>([]);

    const addTodo = (task: string) => {
        const newTodo: TodoState = {
            id: uuidv4(),
            task,
            completed: false,
        }

        setTodos([...todos, newTodo]);
        console.log(newTodo);
    }

    const taskCompleted = (id: string) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return(
        <div className="">
            <h1>To-do-List!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo,index) => (
                <Todo task={todo} key={index} 
                taskCompleted={taskCompleted} 
                deleteTodo={deleteTodo}/> ))}
        </div>
    )
}

export default TodoWrap;