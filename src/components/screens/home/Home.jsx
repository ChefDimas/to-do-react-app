import React from 'react'
import TodoItem from './TodoItem'

const todos = [
  {
    _id: 1,
    title : 'Finish the essay',
    isCompleted : false,
  },
  {
    _id: 2,
    title : 'Clean the room',
    isCompleted : true,
  },
  {
    _id: 3,
    title : 'Go to the gym',
    isCompleted : false,
  }
]

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen text-white">
      {todos.map(todo => (
      <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  )
}

export default Home