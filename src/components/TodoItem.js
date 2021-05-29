import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    render() {
        const { todo, handleChange } = this.props;

        return (
            <React.Fragment>
                <li>
                    <input type='checkbox' 
                        checked={todo.completed} 
                        onChange={() => handleChange(todo.id)} />
                    {todo.title}
                </li>
            </React.Fragment>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    handleChange: PropTypes.func
};

export default TodoItem;