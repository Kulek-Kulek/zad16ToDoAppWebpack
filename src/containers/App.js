import React from 'react';
import uuid from 'uuid';
import style from './App.css';

class TodoTitle extends React.Component{
    render(){
        return <h2>{this.props.content}</h2>
    }
}

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




class TodoForm extends React.Component{
        
    changeInput(ev){
        this.props.onChangeAction(ev.target.value);
    }


    addItem(){
        this.props.onAddTodoAction();
    }
    

    render(){
        return (
            <form>
                <input type="text" onChange={this.changeInput.bind(this)} />
                <button type="button" onClick={this.addItem.bind(this)}>Add Todo</button>
            </form>
        )
    }
}


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
            <TodoTitle content="Lista rzeczy do zrobienia" />
            <TodoForm onChangeAction={this.handleOnChange.bind(this)} onAddTodoAction={this.addTodo.bind(this)} />


            <TodoList items={this.state.todos} remove={this.removeTodo.bind(this)} />
        </div>
      );
    }
}

export default App;