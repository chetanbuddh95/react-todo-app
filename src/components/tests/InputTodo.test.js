import { shallow } from 'enzyme';
import InputTodo from '../InputTodo';

describe('Input Todo component', () => {
    let wrapper;
    const addTodoMockfn = jest.fn()
    
    beforeEach(() => {
        wrapper = shallow(<InputTodo addTodo={addTodoMockfn} />);
    });

    it('Should render component', () => {
        expect(wrapper.find('.input-submit').text()).toEqual('Submit');
    });

    it('Should call onchange method', () => {
        const event = {
            target: { name: 'title' ,value: 'adding new todo' },
        };
        // 1st way
        const input = wrapper.find('.input-text').at(0);
        input.simulate('change', event); 
        // 2nd way
        // wrapper.instance().onChange(event);
        expect(wrapper.state().title).toEqual('adding new todo');
    });

    it('Should call add todo method', () => {
        wrapper.setState({
            title: 'adding new todo'
        });
        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
        expect(addTodoMockfn).toBeCalled();
        expect(wrapper.state().title).toEqual('');
    });
});
