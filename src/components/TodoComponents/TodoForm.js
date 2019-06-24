import React from 'react'

const TodoForm = props => {
    return (
        <>
            <form onSubmit={props.addTodo}>
                <input
                    name="inputText"
                    value={props.value}
                    type="text"
                    onChange={props.handleChange}
                    placeholder="type something todo"
                />
                <button>Add Todo</button>
            </form>
            <button onClick={props.clearCompleted}>Clear Tasks</button>
        </>
    )
}

export default TodoForm