import React from "react";
import TodoItem from "./item/TodoItem";

const todos = [
    {
        _id: 1,
        title: 'Finish the essay',
        isCompleted: false,
    },
    {
        _id: 2,
        title: 'Read next chapter',
        isCompleted: false,
    },
    {
        _id: 3,
        title: 'Do the math for tomorrow',
        isCompleted: false,
    }
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            {todos.map(todo =>
            <TodoItem
            todo={todo}
            key={todo._id}
            />
            )}
        </div>
    )
};

export default Home;