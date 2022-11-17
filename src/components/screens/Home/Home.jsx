import React, {useState} from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";

const data = [
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

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    const addTodo = (title) => {
        setTodos([{
            _id: new Date(),
            title: title,
            isCompleted: false
        },
            ...todos,
        ])
    }

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-7xl font-bold text-center mb-10">To do:</h1>
            {todos.map(todo =>
                <TodoItem
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                    todo={todo}
                    key={todo._id}
                />
            )}
            <CreateTodoField addTodo={addTodo} />
        </div>
    )
};

export default Home;