import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      inputText: ''
    }
  }

  addTodo = event => {
    event.preventDefault()
    console.log('add object')
    const newTodo = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo],
      inputText: ''
    })
  }

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          value={this.state.inputText}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App