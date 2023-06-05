// import { render, screen, fireEvent } from '@testing-library/react';

// import { AutocompleteWrapper } from '../AutocompleteWrapper.molecule';
// import Store from '../../../../../bootstrap/Store';


// describe("<AutocompleteWrapper/>", () => {

//     let assignMock = jest.fn();
//     delete window.location;
//     window.location = { assign: assignMock };

//     afterEach(() => {
//     assignMock.mockClear();
//     });

//     it('should render AutocompleteWrapper element', async () => {
//         render(
//             <Store>
//                 <AutocompleteWrapper placeholder='Search Here!' />
//             </Store>
//         );
//         const inputElement = await screen.findByPlaceholderText(/Search Here!/i);
//         expect(inputElement).toBeInTheDocument();
//     });
// });