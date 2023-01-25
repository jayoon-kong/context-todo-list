import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import Input from '.';

describe('<Input />', () => {
  it ('renders component correctly', () => {
    const { container } = render(<Input value="default value" />);

    const input = screen.getByDisplayValue('default value');
    expect(input).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it ('renders placeholder correctly', () => {
    render(<Input placeholder="default placeholder" />);

    const input = screen.getByPlaceholderText('default placeholder');
    expect(input).toBeInTheDocument();
  });

  it('change the data', () => {
    render(<Input placeholder="default placeholder"/>);

    const input = screen.getByPlaceholderText('default placeholder') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'study react' } });
    expect(input.value).toBe('study react');
  });

  // it('changes backgroundColor and hoverColor Props', () => {
  //   const backgroundColor = '#ff1744';
  //   const hoverColor = '#f01440';
  //   render(<Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />);

  //   const parent = screen.getByText('Button Test').parentElement;
  //   expect(parent).toHaveStyleRule('background-color', backgroundColor);
  //   expect(parent).toHaveStyleRule('background-color', hoverColor, {
  //     modifier: ':hover',
  //   });
  // });

  // it('clicks the button', () => {
  //   const handleClick = jest.fn();
  //   render(<Button label="Button Test" onClick={handleClick} />);

  //   const label = screen.getByText('Button Test');
  //   expect(handleClick).toHaveBeenCalledTimes(0);
  //   fireEvent.click(label);
  //   expect(handleClick).toHaveBeenCalledTimes(1);
  // });
});