import { fireEvent, render, screen } from '@testing-library/react';

import Index from '../pages/index';

test('clicking "Uppercase" button should convert input text to uppercase', () => {
  render(<Index />);

  const input = 'hello, world!';
  const output = 'HELLO, WORLD!';

  const inputTextArea = screen.getByLabelText(/Input/);
  fireEvent.change(inputTextArea, { target: { value: input } });

  const uppercaseButton = screen.getByText(/Uppercase/);
  fireEvent.click(uppercaseButton);

  const outputTextArea = screen.getByLabelText(/Output/);
  expect(outputTextArea).toHaveValue(output);
});

test('clicking "Lowercase" button should convert input text to lowercase', () => {
  render(<Index />);

  const input = 'HELLO, WORLD!';
  const output = 'hello, world!';

  const inputTextArea = screen.getByLabelText(/Input/);
  fireEvent.change(inputTextArea, { target: { value: input } });

  const lowercaseButton = screen.getByText(/Lowercase/);
  fireEvent.click(lowercaseButton);

  const outputTextArea = screen.getByLabelText(/Output/);
  expect(outputTextArea).toHaveValue(output);
});

test('clicking "Titlecase" button should convert input text to titlecase', () => {
  render(<Index />);

  const input = 'hello, world!';
  const output = 'Hello, World!';

  const inputTextArea = screen.getByLabelText(/Input/);
  fireEvent.change(inputTextArea, { target: { value: input } });

  const titlecaseButton = screen.getByText(/Titlecase/);
  fireEvent.click(titlecaseButton);

  const outputTextArea = screen.getByLabelText(/Output/);
  expect(outputTextArea).toHaveValue(output);
});

test('clicking "Reverse" button should reverse input text', () => {
  render(<Index />);

  const input = 'hello, world!';
  const output = '!dlrow ,olleh';

  const inputTextArea = screen.getByLabelText(/Input/);
  fireEvent.change(inputTextArea, { target: { value: input } });

  const reverseButton = screen.getByText(/Reverse/);
  fireEvent.click(reverseButton);

  const outputTextArea = screen.getByLabelText(/Output/);
  expect(outputTextArea).toHaveValue(output);
});
