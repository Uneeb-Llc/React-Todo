import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


class TodoList extends React.Component {


    render() {
        return (
            <div>
                {this.props.todoList.map((item) => (
                    // console.log(item)

                    <Todo key={item.id} toggleItem={this.props.toggleItem} item={item} />
                    
                ))}
                <button className="clear-btn" onClick={this.props.clearItem}>
                 CLEAR
                </button>
            </div>
        )
    };
};

export default TodoList;