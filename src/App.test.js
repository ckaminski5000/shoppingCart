import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NavBar } from './components/navBar/navBar';



describe('renders NavBar', () => {

  it('renders the word shop', () => {
    render(<NavBar />, {wrapper: BrowserRouter});
    const linkElement = screen.getByText('Shop');
    expect(linkElement).toBeInTheDocument();
  })

  it('Shopping Cart is Called with expected Props', () => {
    render(<NavBar />, {wrapper: BrowserRouter});
    const cartButton = screen.getAllByAltText('cart');
    console.log(cartButton);
    expect(cartButton[0]).toBeInTheDocument();
  })


})
