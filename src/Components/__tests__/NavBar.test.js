import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';

// Mocking the useSelector hook
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockStore = configureStore([]);

describe('NavBar Component', () => {
  it('renders NavBar with correct elements', () => {
    const store = mockStore({ cart: { items: [] } });
    useSelector.mockReturnValue([]);

    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    // Check if essential elements are present
    expect(screen.getByText('Other')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
    expect(screen.getByText('Offers')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    
  });

  it('displays the correct cart item count', () => {
    const store = mockStore({ cart: { items: [{ id: 1, name: 'Product 1' }] } });
    useSelector.mockReturnValue(store.getState().cart.items);

    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    // Check if the cart item count is displayed correctly
    expect(screen.getByText('(1)')).toBeInTheDocument();
  });

  // Add more test cases as needed
});
