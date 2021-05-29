import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<App />);
        wrapper.setState({
            todos: [{
                id: 1,
                title: 'first todo',
                completed: false
            }]
        });
    });

    it('Header component should render', () => {
        const header = wrapper.find('Header').dive();
        expect(header.exists()).toBe(true);
        const headerText = header.find('h3').text();
        expect(headerText).toEqual('My Todos');
    });

    it('Todo item should be marked as completed', () => {
        wrapper.instance().handleChangeEvent(1);
        const expetedState = [{
            id: 1,
            title: 'first todo',
            completed: true
        }];
        expect(wrapper.state().todos).toEqual(expetedState);
    });

    it('New todo item should be added', () => {
        wrapper.instance().addTodo('second todo');
        expect(wrapper.state().todos.length).toEqual(2);
    });
});
