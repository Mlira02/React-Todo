import React from 'react'
import './Todo.css'

const Todo = props => {
    return (
        <li
            className={`${props.todo.completed ? 'completed' : ""}`}
            onClick={() => props.toggleComplete(props.todo.id)}>
            {props.todo.task}
        </li>
    )
}

export default Todo