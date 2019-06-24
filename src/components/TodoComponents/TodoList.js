import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <>
            <h2>Todo List</h2>
            <ul>
                {props.todos.map(item =>
                    <Todo
                        key={item.id}
                        todo={item}
                        toggleComplete={props.toggleComplete}
                    />
                )}

            </ul>
        </>
    )
}

export default TodoList