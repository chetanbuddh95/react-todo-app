import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    render() {
        const { todos, handleChange } = this.props;
        return (
            <ul>
                {todos.map((item) => 
                    <TodoItem key={item.id} todo={item} handleChange={handleChange} />
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.array,
    handleChange: PropTypes.func
};

export default TodoList;