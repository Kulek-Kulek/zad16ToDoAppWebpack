import React from 'react';
import Todo from '../components/Todo.js';

class TodoList extends React.Component{
    onRemove(id){
        this.props.remove(id);
    }

    render(){
        return(
            <ul>
                {this.props.items.map(item => {
                    return (<Todo key={item.id} text={item.text} id={item.id} removeAction={this.onRemove.bind(this)} />)
                })}
            </ul>
        );  
    }
}

export default TodoList;

