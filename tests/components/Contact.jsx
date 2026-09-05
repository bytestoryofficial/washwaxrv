/* eslint-disable no-unused-vars */
import React from 'react';

function handleOnSave(event) {
  const { name, email, phone, message } = event.target.elements;
  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };
  console.log(formData);
  event.preventDefault();
}

const Contact = ({ onSubmit = handleOnSave, ...props }) => {
  return (
    <form data-testid="form" onSubmit={onSubmit}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email" required />
      <input name="phone" type="text" placeholder="Phone" required />
      <input name="message" type="text" placeholder="Message" />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default Contact;
