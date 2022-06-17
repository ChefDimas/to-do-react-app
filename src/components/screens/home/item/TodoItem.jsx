import React from "react";
import Check from "./Check";

const toDoItem = ({ todo }) => {
    return (
        <div>
            <Check />
            {todo.title}
        </div>
    );
};

export default toDoItem;
