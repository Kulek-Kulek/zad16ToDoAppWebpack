import React from 'react';

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

export default TodoForm;