import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddProduct from './AddProduct';


test('Test AddProduct correctly', () => {
    render(<AddProduct />);
    expect(screen.getByPlaceholderText(/Type Product title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Type price/i)).toBeInTheDocument();
    expect(screen.getByText(/Product Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Click to upload product image/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
});

test('updates product details on input change', () => {
    render(<AddProduct />);
    const nameInput = screen.getByPlaceholderText(/Type Product title/i);
    fireEvent.change(nameInput, { target: { value: 'New Product' } });
    expect(nameInput.value).toBe('New Product');
    const priceInput = screen.getByPlaceholderText(/Type price/i);
    fireEvent.change(priceInput, { target: { value: '100' } });
    expect(priceInput.value).toBe('100');
  });