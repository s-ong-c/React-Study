import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

class TodoList extends Component {
    render() {

        const {todos, onToggle} = this.props;
        const todoList = todos.map(
            todo => (  // map 으로 반복문 출력 
                <TodoItem
                    key = {todo.id}
                    done={todo.done}
                    onToggle ={() => onToggle(todo.id)}>
                    {todo.text}
                    </TodoItem>
            )
        );
        return (
            <div>
                {todoList}

            </div>
        );
    }
}

export default TodoList;