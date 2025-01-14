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
            className="bg-gray-100 p-5 mt-3 rounded-2xl text-center text-yellow-950"
            placeholder="Qual é a tarefa?" 
            value={value} 
            onChange={(event) => setValue(event.target.value)}/>
            <div className="font-extrabold p-4">
            <button type="submit"
            >Adicionar Tarefa</button></div>
        </form>
    )
}



export default TodoForm;