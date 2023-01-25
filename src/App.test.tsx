import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import 'jest-styled-components';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);

    const toDoList = screen.getByTestId('toDoList');
    expect(toDoList).toBeInTheDocument();
    expect(toDoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('할 일을 입력해 주세요');
    expect(input).toBeInTheDocument();
    const label = screen.getByText('추가');
    expect(label).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});