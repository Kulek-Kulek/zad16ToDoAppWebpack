import React from 'react';
import style from './Todo.css';


class Todo extends React.Component{
    removeItem(){
        this.props.removeAction(this.props.id);
    }
    render(){
        return(
            <div className={style.Todo}>
                {this.props.text}
                <button type="button" onClick={this.removeItem.bind(this)}>Remove Todo</button>
            </div>
        )
    }
}

export default Todo;