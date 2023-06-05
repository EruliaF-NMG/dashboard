import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBoxWithState } from '../CheckBoxWithState.molecule';
import { Icon,faUser } from '../../../common/Icon.atom';
import { FormWrapper } from '../../form-wrapper/FormWrapper.atom';
import Store from '../../../../../bootstrap/Store';

const mockedFunction = jest.fn();

describe("<CheckBoxWithState/>", () => {
    it('should render CheckBoxWithState element', () => {
        render(
            <Store>
                <FormWrapper
                    setGroupName={"test_input_form"}
                    setFormObject={{
                        is_check:false
                    }}
                >
                    <CheckBoxWithState 
                        name={'is_check'}
                        labelElement={"Check Here"}
                        setGroupName={"test_input_form"}
                        onChange={mockedFunction}
                    />
                </FormWrapper>
            </Store>
        );
        const inputElement = screen.getByTestId(`test_id_is_check`);
        expect(inputElement).toBeInTheDocument();
    });

    it('should render state change in CheckBoxWithState element', () => {
        render(
            <Store>
                <FormWrapper
                    setGroupName={"test_input_form"}
                    setFormObject={{
                        is_check:false
                    }}
                >
                    <CheckBoxWithState 
                        name={'is_check'}
                        labelElement={"Check Here"}
                        setGroupName={"test_input_form"}
                        onChange={mockedFunction}
                    />
                </FormWrapper>
            </Store>
        );
        const inputElement = screen.getByTestId(`test_id_is_check`);
        fireEvent.click(inputElement);
        expect(inputElement).toBeChecked(true);
    });
});