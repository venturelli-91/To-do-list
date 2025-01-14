import React, { useState } from "react";

interface TodoFormState {
    addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormState> = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(value.trim() === '') {
            console.log('Preencha a tarefa corretamente!');
        }
        addTodo(value);
        setValue('');
    }

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            
            <input type="text" 
            placeholder="Qual é a tarefa?" 
            value={value} 
            onChange={(event) => setValue(event.target.value)}/>
            
            <button type="submit" className="todo-button">Enviar Tarefa</button>
        </form>
    )
}



export default TodoForm;