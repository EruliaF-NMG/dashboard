import { render, screen, fireEvent } from '@testing-library/react';
import { CheckBox } from '../CheckBox.molecule';
import { Icon,faUser } from '../../../common/Icon.atom';

const mockedFunction = jest.fn();

describe("<CheckBox/>", () => {
    it('should render CheckBox element', () => {
        render(
            <CheckBox 
                name={'is_check'}
                inputStyleClass={'Search here!'}
                wrapperStyleClass={""}
                labelStyleClass={""}
                labelElement={"Check Here"}
                isChecked={true}
                onChange={mockedFunction}
            />
        );
        const inputElement = screen.getByTestId(`test_id_is_check`);
        expect(inputElement).toBeInTheDocument();
    });
});