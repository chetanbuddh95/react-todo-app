import React from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

const Header = () => {
    return (
        <header>
            <h3>My Todos</h3>
        </header>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: 'my first todo',
                    completed: true,
                },
                {
                    id: 2,
                    title: 'my 2nd todo',
                    completed: false,
                },
                {
                    id: 3,
                    title: 'my 3rd todo',
                    completed: false,
                }
            ],
        }
    }

    handleChangeEvent = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    }
                }
                return item
            })
        }));
    };

    addTodo = (title) => {
        const newTodo = {
            id: 4,
            title,
            completed: false,
        } 
        this.setState({
            todos: [
                ...this.state.todos,
                newTodo,
            ]
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='inner'>
                    <Header/>
                    <InputTodo addTodo={this.addTodo}/>
                    <TodoList todos={this.state.todos} handleChange={this.handleChangeEvent}/>
                </div>
            </div>
        )
    }
}

export default App;
