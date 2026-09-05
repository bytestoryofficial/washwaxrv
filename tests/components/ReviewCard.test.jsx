/* eslint-disable no-unused-vars */
import { render, fireEvent } from '@testing-library/react';
import { it, describe } from 'vitest';
import Contact from './Contact';

describe('ContactUsModule', () => {
  it('Form validation', () => {
    const { getByPlaceholderText, getByText } = render(<Contact />);
    const nameInput = getByPlaceholderText(/Name/i);
    const emailInput = getByPlaceholderText(/Email/i);
    const phoneInput = getByPlaceholderText(/Phone/i);
    const messageInput = getByPlaceholderText(/Message/i);

    fireEvent.change(nameInput, { target: { value: 'Test Name' } });
    fireEvent.change(emailInput, { target: { value: null } });
    fireEvent.change(phoneInput, { target: { value: null } });
    fireEvent.change(messageInput, { target: { value: 'Test Message' } });
    fireEvent.click(getByText(/Send Message/i));
  });
});
