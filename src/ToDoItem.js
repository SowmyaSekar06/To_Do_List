import {React, useState} from "react";

const ToDoItem = (props) => {
    return (
        <div onClick={() =>{props.deleteItem(props.id)}}>
            <li> {props.text} </li>
        </div>
    );
}

export default ToDoItem;