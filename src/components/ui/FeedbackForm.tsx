"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FeedbackForm: React.FC = () => {
  const [userName, setUserName] = useState(''); // Added userName state
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailRegex.test(userEmail)) {
      setError('Please enter a valid Gmail address.');
      return;
    }

    // EmailJS Configuration
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string, // EmailJS service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // EmailJS template ID
        {
          from_name: userName, // User's name (from_name)
          to_name: 'Digiहल', // Your name or website name (to_name)
          user_email: userEmail, // User's email
          message: message, // Message content
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string // EmailJS public key (User ID)
      )
      .then(
        (response) => {
          setSuccessMessage('Your message has been sent successfully!');
          setMessage('');
          setUserEmail('');
          setUserName(''); // Clear the name input
        },
        (error) => {
          setError('There was an issue sending your message. Please try again later.');
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Us a Message</h2>
      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
      {successMessage && <div className="text-green-600 mb-4 text-center">{successMessage}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-4">
          <label className="block text-gray-700">Your Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Your Gmail</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your Gmail address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
