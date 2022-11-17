import React, {useState} from "react";

const CreateTodoField = ({addTodo}) => {
    const [title, setTitle] = useState('')

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl
         border-zinc-700 border-2 p-5 w-full mt-10">
            <input type="text"
            onChange={e => setTitle(e.target.value)}
            value={title}
            onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
            className="bg-transparent w-full border-none outline-none"
            placeholder="Add a task"/>
        </div>
    )
};

export default CreateTodoField;