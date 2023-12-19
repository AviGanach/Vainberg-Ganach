import React, { useState } from 'react';

const Forms = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  // Handler for updating form field values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any action with the form data here
    console.log('Form data submitted:', formData);

    // Clear form fields after submission
    setFormData({
      fullName: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
    
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
