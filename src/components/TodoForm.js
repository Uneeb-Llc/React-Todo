import React from 'react';

class TodoForm extends React.Component {
    // constructor with state
    constructor(){
        super();
        this.state = {
            item: ""
        };
    }

    handleChange = e => {
        this.setState({item: e.target.value})
        console.log(e.target.name)
    }

   submitItem = e => {
       e.preventDefault();
       this.props.addTask(this.state.item);
       this.setState({ item: "" });
   }

    render(){
        return (
            <form className="add-task" onSubmit={this.submitItem}>
            
               <input
                 type='text'
                 placeholder="Enter a task"
                 name='item'
                 value={this.state.item}
                 onChange={this.handleChange}
               />
               <button className="add">Add</button>
            </form>
        )
    }
}

export default TodoForm;