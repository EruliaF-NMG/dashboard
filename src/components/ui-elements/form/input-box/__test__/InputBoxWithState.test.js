import { render, screen, fireEvent } from '@testing-library/react';

import { InputBoxWithState } from '../InputBoxWithState.molecule';
import { FormWrapper } from '../../form-wrapper/FormWrapper.atom';
import Store from '../../../../../bootstrap/Store';
import { Icon,faUser } from '../../../common/Icon.atom';

const mockedFunction = jest.fn();

describe("<InputBoxWithState/>", () => {
    it('should render InputBoxWithState element', () => {
        render(
            <Store>
                <FormWrapper
                    setGroupName={"test_input_form"}
                    setFormObject={{
                        test_input:""
                    }}
                >
                    <InputBoxWithState 
                        setGroupName={'test_input_form'}
                        placeholder={'Test Input'}
                        iconElement={<Icon icon={faUser}/>}
                        onChange={mockedFunction}
                        onClick={mockedFunction}
                    />
                </FormWrapper>
            </Store>
        );
        const inputElement = screen.getByPlaceholderText(/Test Input/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into InputBoxWithState', () => {
        render(
            <Store>
                <FormWrapper
                    setGroupName={"test_input_form"}
                    setFormObject={{
                        test_input:""
                    }}
                >
                    <InputBoxWithState 
                        setGroupName={'test_input_form'}
                        placeholder={'Test Input'}
                        iconElement={<Icon icon={faUser}/>}
                        onChange={mockedFunction}
                        onClick={mockedFunction}
                    />
                </FormWrapper>
            </Store>
        );
        const inputElement = screen.getByPlaceholderText(/Test Input/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
        expect(inputElement.value).toBe("key word");
    });
});