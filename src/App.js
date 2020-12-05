import React from 'react';
import TodoList from '../src/components/TodoList';
import TodoForm from '../src/components/TodoForm';



const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
   constructor() {
     super();
      this.state = {
        todoList //Same as === todoList : todoList
      }
   }


  toggleItem = itemId => {
    // console.log(itemId)
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
               completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearItem = e => {
    e.preventDefault();
    this.setState({
      todoList : this.state.todoList.filter(item => !item.completed)
    })
  }

  //  Class method to add a grocery item
  addTask = (item) => {
     
    console.log("adding task")
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    }

   this.setState({
     ...this.state, todoList: [...this.state.todoList, newTask]
   })
  }



  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask = {this.addTask}/>
        <TodoList toggleItem={this.toggleItem} clearItem = {this.clearItem} todoList = {this.state.todoList}/>
      </div>
    );
  }
}

export default App;
