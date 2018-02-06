import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title.js';
import Todo from '../components/Todo.js';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentTodo: '',
            todos: []
        };
    }
    addTodo(){
        const todo = {
            text: this.state.currentTodo,
            id: uuid.v4(),
        };
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    removeTodo(id) {
        const remainder = this.state.todos.filter(todo => todo.id !== id);
        this.setState({todos: remainder});
    }

    handleOnChange(ev){
        this.setState({currentTodo: ev.target.value})
    }


    render() {
      return (
        <div className={style.TodoApp}>
            <form>
                <input type="text" onChange={this.handleOnChange.bind(this)} />
                <button type="button" onClick={this.addTodo.bind(this)}>Add Todo</button>
            </form>
            <ul>
                {this.state.todos.map(todo => {
                    return (<div key={todo.id}>
                            {todo.text}
                            <button type="button" onClick={this.removeTodo.bind(this, todo.id)}>Remove Todo</button>
                        </div>)
                })}
            </ul>
        </div>
      );
    }
}

export default App;