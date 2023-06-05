import { render, screen, fireEvent } from '@testing-library/react';
import { InputBox } from '../InputBox.molecule';
import { Icon,faUser } from '../../../common/Icon.atom';

const mockedFunction = jest.fn();

describe("<InputBox/>", () => {
    it('should render InputBox element', () => {
        render(
            <InputBox 
                name={'search_text'}
                placeholder={'Search here!'}
                errorText={""}
                value={""}
                iconElement={<Icon icon={faUser}/>}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into InputBox', () => {
        render(
            <InputBox 
                name={'search_text'}
                placeholder={'Search here!'}
                errorText={""}
                value={"key word"}
                iconElement={<Icon icon={faUser}/>}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
        expect(inputElement.value).toBe("key word");
    });

    it('should render error message if exist in InputBox', () => {
        render(
            <InputBox 
                name={'search_text'}
                placeholder={'Search here!'}
                errorText={"Error Message"}
                value={"key word"}
                iconElement={<Icon icon={faUser}/>}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByText(/Error Message/i);
        expect(inputElement).toBeInTheDocument();
    });
});