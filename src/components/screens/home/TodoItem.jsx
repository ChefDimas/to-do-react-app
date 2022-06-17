import React from 'react';
import {BsCheck} from 'react-icons/bs';

const toDoItem = ({todo}) => {
  return (
    <div>
        <BsCheck />
        {todo.title}
    </div>
  )
}

export default toDoItem