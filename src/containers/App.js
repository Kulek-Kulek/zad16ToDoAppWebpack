import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import TodoTitle from '../components/Title.js';
import Todo from '../components/Todo.js';
import TodoForm from '../components/TodoForm.js';
import TodoList from '../components/TodoList.js';

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

    handleOnChange(value){
        this.setState({currentTodo: value})
    }


    render() {
      return (
        <div className={style.TodoApp}>
            <TodoTitle content="Lista rzeczy do zrobienia!!!" />
            <TodoForm onChangeAction={this.handleOnChange.bind(this)} onAddTodoAction={this.addTodo.bind(this)} />


            <TodoList items={this.state.todos} remove={this.removeTodo.bind(this)} />
        </div>
      );
    }
}

export default App;