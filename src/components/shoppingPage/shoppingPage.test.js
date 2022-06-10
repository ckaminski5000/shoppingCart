import { getByAltText, render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { ShoppingPage } from './shoppingPage';
import {items} from '../data.js';

describe('renders products to buys', () => {

    it('renders an image', () => {
        const props = {
            products: items,
            handleClick: jest.fn(),
            setProductPage: jest.fn()
        };
        const wrapper = ({children}) => {
            return (
            <HashRouter >
                {children}
            </HashRouter>);
        }
        const {getByAltText} = render(<ShoppingPage {...props} />, {wrapper: wrapper});
        const linkElement = getByAltText('Tigger the Tiger');
        expect(linkElement).toBeInTheDocument();
    })

    it('renders shopping Page component', () => {
        const props = {
            products: items,
            handleClick: jest.fn(),
            setProductPage: jest.fn()
        };
        const wrapper = ({children}) => {
            return (
            <HashRouter >
                {children}
            </HashRouter>);
        }
        render(<ShoppingPage {...props} />, {wrapper: wrapper});
        screen.getByRole('');
    })

})