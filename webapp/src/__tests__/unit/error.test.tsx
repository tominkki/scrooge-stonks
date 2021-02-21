import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ErrorSnackbar from '../../components/ErrorSnackbar';

describe('<ErrorSnackbar/> tests', () => {
  test('it renders message passed as prop when error is true', () => {
    const error = true;
    const message = 'testing...';
    const setError: React.Dispatch<React.SetStateAction<boolean>> = jest.fn();

    const component = render(
      <ErrorSnackbar error={error} setError={setError} message={message}/>
    );

    expect(component.container).toHaveTextContent(message);
  });

  test('it does not render message passed as prop when error is false', () => {
    const error = false;
    const message = 'testing...';
    const setError: React.Dispatch<React.SetStateAction<boolean>> = jest.fn();

    const component = render(
      <ErrorSnackbar error={error} setError={setError} message={message}/>
    );

    expect(component.container).not.toHaveTextContent(message);
  });

  test('it should call setError for closing itself after x time', () => {
    const error = true;
    const message = 'testing...';
    const setError: React.Dispatch<React.SetStateAction<boolean>> = jest.fn();

    jest.useFakeTimers();

    const component = render(
      <ErrorSnackbar error={error} setError={setError} message={message}/>
    );

    expect(component.container).toHaveTextContent(message);

    jest.runAllTimers();
    expect(setError).toHaveBeenCalledTimes(1);
  });

  test('it should call setError when close button is clicked', () => {
    const error = true;
    const message = 'testing...';
    const setError: React.Dispatch<React.SetStateAction<boolean>> = jest.fn();

    const component = render(
      <ErrorSnackbar error={error} setError={setError} message={message}/>
    );

    const button = component.getByRole('button', { name: 'close' });
    fireEvent.click(button);

    expect(component.container).toHaveTextContent(message);
    expect(setError).toHaveBeenCalledTimes(1);
  });
});
