import { render, screen, fireEvent } from '@testing-library/react';
import { HtmlButton } from '../HtmlButton.atom';

const mockedFunction = jest.fn();

describe("<HtmlButton/>", () => {
    it('should render HtmlButton element', () => {
        render(
            <HtmlButton 
                name={'add'}
                btnText={'ADD'}
                onClick={mockedFunction}
            />
        );
        const inputElement = screen.getByRole('button',{ name:"ADD" });
        expect(inputElement).toBeInTheDocument();
    });
});