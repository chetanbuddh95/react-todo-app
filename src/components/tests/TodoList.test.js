import { shallow } from 'enzyme';
import TodoList from '../TodoList';

describe('Todo list component', () => {
    const props = {
        todos: [{
            id: 1,
            title: 'first todo',
            completed: false
        }],
        handleChange: jest.fn(),
    }

    it('should render component', () => {
        const wrapper = shallow(<TodoList {...props} />);
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('TodoItem').length).toEqual(1);
    });
});
