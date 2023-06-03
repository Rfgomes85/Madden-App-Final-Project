import React, { useState } from 'react';
import '../App.css';

function Signup() {
  const [email, setEmail] = useState(''); // State variable to store the email value
  const [showAlert, setShowAlert] = useState(false); // State variable to control the display of the alert message

  const handleEmailChange = (e) => {
    setEmail(e.target.value); // Update the email value when the input field value changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here (e.g., sending email to backend, storing in database, etc.)
    console.log('Email submitted:', email); // Log the submitted email to the console

    // Reset the input field after submission
    setEmail('');

    // Show the alert
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="home-container">
      <h2>Sign up for news updates</h2>

      {showAlert && <div className="success-alert">Sign up successful!</div>}
      {/* Display the success alert when showAlert is true */}

      <form onSubmit={handleSubmit}>
        <input type="email" className="input-box" placeholder="Enter your email" value={email} onChange={handleEmailChange} required />
        {/* Bind the email input value to the email state variable */}
        {/* Call handleEmailChange function when the input value changes */}

        <button className="custom-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
