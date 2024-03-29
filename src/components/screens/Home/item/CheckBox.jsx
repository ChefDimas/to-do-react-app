import React from "react";
import {BsCheck} from "react-icons/bs";


const CheckBox = ({isCompleted}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-600 
        ${isCompleted ? "bg-pink-600" : ''} w-7 h-7 mr-3`}>
            {isCompleted &&
                <BsCheck
                    size={24}
                    className="text-gray-900"
                />}
        </div>
    )
};

export default CheckBox;