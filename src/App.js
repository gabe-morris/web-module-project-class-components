import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'
const tasks = [
{
  name: "",
  id: Date.now(),
  completed: false
}
]
class App extends React.Component {
constructor() {
  super();
  this.state = {
    tasks: tasks
  };
} 
handleAddTask = (name) => {
 const newTask = {
   name: name,
   id: Date.now(),
   completed: false
 }
 this.setState({
   tasks: [...this.state.tasks, newTask]
 })
}
handleClear = () => {
  this.setState({
    tasks: this.state.tasks.filter(item => {
      return (item.completed === false)
    })
  })
}

handleCompleted = (id) => {
  this.setState({
    tasks: this.state.tasks.map(item => {
      if (item.id === id) {
        return({
          ...item,
          completed: !item.completed
        })
      }
      return item;
    })
  })
}
  render() {
    return (
      <div className = 'App'>
        <div className ='header'>
        <h1>To-Do List</h1>
        </div>
        <TodoForm handleAddTask={this.handleAddTask}/>
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} tasks={this.state.tasks}/>
      </div>
      
    );
  }
}

export default App;
