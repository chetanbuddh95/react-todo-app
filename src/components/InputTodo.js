import React from 'react';
import ProtoTypes from 'prop-types';

class InputTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value, 
        });
    }

    addTodo = (e) => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodo(this.state.title);
            this.setState({
                title: '', 
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.addTodo} className="form-container">
                <input type='text' 
                    className='input-text'
                    placeholder="Add todo..." 
                    value= {this.state.title}
                    onChange={this.onChange} 
                    name='title'
                />
                <button className='input-submit'>Submit</button> 
            </form>
        );
    }
}

InputTodo.proptypes = {
    addTodo: ProtoTypes.func,
}

export default InputTodo;