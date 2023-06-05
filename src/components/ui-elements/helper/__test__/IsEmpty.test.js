import { render, screen, fireEvent } from '@testing-library/react';
import { IsEmpty } from '../IsEmpty.atom';

const mockedFunction = jest.fn();

describe("<IsEmpty/>", () => {
    it('should NO data message if empty', () => {
        render(
            <IsEmpty 
                value={null}
                elementIFEmpty={<span data-testid={`no_item`}>No Data</span>}
            >
                <div data-testid={`show_item`} >item</div>
            </IsEmpty>
        );
        const inputElement1 = screen.getByTestId('no_item')
        expect(inputElement1).toBeInTheDocument();
        const inputElement2 = screen.queryByTestId('show_item')
        expect(inputElement2).not.toBeInTheDocument();
    });

    it('should Data message if not empty', () => {
        render(
            <IsEmpty 
                value={"data"}
                elementIFEmpty={<span data-testid={`no_item`}>No Data</span>}
            >
                <div data-testid={`show_item`} >item</div>
            </IsEmpty>
        );
        const inputElement1 = screen.getByTestId('show_item')
        expect(inputElement1).toBeInTheDocument();
        const inputElement2 = screen.queryByTestId('no_item')
        expect(inputElement2).not.toBeInTheDocument();
    });
});