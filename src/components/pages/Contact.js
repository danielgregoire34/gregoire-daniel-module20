import React, { useState } from 'react';
import '../pages/style.css';


import { checkMessage, validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(name) || !email) {
      setErrorMessage('name or email is invalid');

      return;

    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Message error: ${message}`
      );
      return;
    }
    alert(`Hello ${email}`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}