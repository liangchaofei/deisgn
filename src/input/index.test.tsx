import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import input from './index';

describe('input', () => {
  test('renders input', () => {
    render(<input>click me</input>);
    const linkElement = screen.getByText(/click me/i);
    expect(linkElement).toBeInTheDocument();
  });
/**
  test('renders normal input', () => {
    const { container } = render(<input>click me</input>);
    expect(container.querySelector('.ant-btn-normal')).toBeInTheDocument();
  });


  
  test('renders small input', () => {
    const { container } = render(<input size='small'>click me</input>);
    expect(container.querySelector('.ant-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();

    render(<input onClick={onClick}>click me</input>);
    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement)
    expect(onClick).toBeCalled()
  });
**/
 
})