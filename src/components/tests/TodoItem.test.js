import { shallow } from 'enzyme';
import TodoItem from '../TodoItem';

describe('Todo item component', () => {
    let wrapper;
    const handleChangeMockFn = jest.fn();
    
    beforeEach(() => {
        const props = {
            todo: {
                id: 1,
                title: 'first todo',
                completed: true,
            },
            handleChange: handleChangeMockFn,
        }
        wrapper = shallow(<TodoItem  {...props} />);
    });

    it('should render component', () => {
        expect(wrapper.find('li').exists()).toBe(true);
    });

    it('should call handle change method', () => {
        const inuput = wrapper.find('input');
        expect(inuput.props().checked).toBe(true);
        inuput.simulate('change', {});
        expect(handleChangeMockFn).toBeCalled();
    });
});
