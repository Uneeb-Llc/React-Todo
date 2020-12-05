import React from 'react';
import './Todo.css';

class Todo extends React.Component {



    render() {
        return(
            <div
            className={`item${this.props.item.completed ? "completed" : ""}`}
            onClick={() => this.props.toggleItem(this.props.item.id)}
            >
                
                   <p>{this.props.item.task}</p>
                
            </div>
        )
    }
}

export default Todo;