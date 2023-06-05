import { render, screen, fireEvent } from '@testing-library/react';
import { HtmlInput } from '../HtmlInput.atom';

const mockedFunction = jest.fn();

describe("<HtmlInput/>", () => {
    it('should render input element', () => {
        render(
            <HtmlInput 
                name={'search_text'}
                placeholder={'Search here!'}
                value={""}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <HtmlInput 
                value='key word'
                name={'search_text'}
                placeholder={'Search here!'}
                onChange={mockedFunction}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Search here!/i);
        fireEvent.change(inputElement, { target: { value: "key word" } });
        expect(inputElement.value).toBe("key word");
    });
});