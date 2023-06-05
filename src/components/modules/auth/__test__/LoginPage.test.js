import { render, screen, fireEvent,waitFor } from '@testing-library/react';

import Login from '../login/Login.page';
import Store from '../../../../bootstrap/Store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const mockedFunction = jest.fn();

describe("<Login/>", () => {
    it('should render Login Page', () => {
        render(
            <Store> 
                <Login/>
            </Store>
        );
        const inputElement = screen.getByPlaceholderText('UserName')
        expect(inputElement).toBeInTheDocument();
        const inputElement2 = screen.getByPlaceholderText('Password')
        expect(inputElement2).toBeInTheDocument();
        const buttonElement = screen.getByRole('button',{name:"Login"})
        expect(buttonElement).toBeInTheDocument();
    });

    it('check validation If Empty', () => {
        render(
            <Store> 
                <Login/>
            </Store>
        );
        const inputElement = screen.getByRole('button',{name:"Login"})
        fireEvent.click(inputElement);
        const element1 = screen.queryByText("The UserName field is required")
        expect(element1).toBeInTheDocument();
        const element2 = screen.queryByText("The Password field is required")
        expect(element2).toBeInTheDocument();
    });

    it('check character length validation', () => {
        render(
            <Store> 
                <Login/>
            </Store>
        );
        const inputElement1 = screen.getByPlaceholderText('UserName')
        fireEvent.change(inputElement1, { target: { value: "ab" } });
        const inputElement2 = screen.getByPlaceholderText('Password')
        fireEvent.change(inputElement2, { target: { value: "12" } });

        const buttonElement = screen.getByRole('button',{name:"Login"})
        fireEvent.click(buttonElement);

        const element1 = screen.queryByText("The UserName must be at least 3.")
        expect(element1).toBeInTheDocument();
        const element2 = screen.queryByText("The Password must be at least 3.")
        expect(element2).toBeInTheDocument();
    });

    it('check Login Process', async () => {
        const history = createMemoryHistory();
        render(
            <Store> 
                <Router location={history.location} navigator={history} >
                    <Login/>
                </Router>
            </Store>
        );
        const inputElement1 = screen.getByPlaceholderText('UserName')
        fireEvent.change(inputElement1, { target: { value: "abcd" } });
        const inputElement2 = screen.getByPlaceholderText('Password')
        fireEvent.change(inputElement2, { target: { value: "1234" } });

        const buttonElement = screen.getByRole('button',{name:"Login"})
        await fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(history.location.pathname).toBe('/dashboard');
        });
    });
});