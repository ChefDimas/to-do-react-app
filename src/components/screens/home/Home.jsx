import React from "react";
import TodoItem from "./item/TodoItem";

const todos = [
    {
        _id: 1,
        title: "Finish the essay",
        isCompleted: false,
    },
    {
        _id: 2,
        title: "Clean the room",
        isCompleted: true,
    },
    {
        _id: 3,
        title: "Go to the gym",
        isCompleted: false,
    },
];

const Home = () => {
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">To do List</h1>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} />
            ))}
        </div>
    );
};

export default Home;
