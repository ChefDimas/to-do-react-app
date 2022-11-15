import React from "react";
import CheckBox from "./CheckBox";

const TodoItem = ( {todo, changeTodo} ) => {
    return (
        <button className="flex items-center text-4xl mb-4 rounded-xl
         bg-gray-800 p-4 min-w-full"
        onClick={() => changeTodo(todo._id)}>
            <CheckBox isCompleted={todo.isCompleted}/>
            <span className={`underline ${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</span>
        </button>
    )
};

export default TodoItem;