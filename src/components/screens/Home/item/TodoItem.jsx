import React from "react";
import CheckBox from "./CheckBox";
import {BsTrashFill} from "react-icons/bs";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="flex items-center bg-gray-800 p-4 w-full
                        rounded-2xl justify-between mb-4"
        >
            <button className="flex items-center cursor-pointer"
                    onClick={() => changeTodo(todo._id)}>
                <CheckBox isCompleted={todo.isCompleted}/>

                <span
                    className={`underline ${todo.isCompleted ? "line-through" : ""} text-4xl `}>
                {todo.title}
            </span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrashFill size={35}
                             className="text-gray-900 hover:text-pink-600
                            focus:text-pink-600 transition-colors ease-in-out duration-300"/>
            </button>
        </div>
    )
};

export default TodoItem;