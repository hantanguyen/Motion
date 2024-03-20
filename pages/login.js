import { Inter } from 'next/font/google';
import React, { useState } from 'react';

const inter = Inter({ subsets: ["latin"]});

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can implement your login logic, such as sending a request to a server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form after submission
    setUsername('');
    setPassword('');
  };

  return (
    <div className={inter.className}>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-300">
        <h2 className="text-2xl font-bold mb-4">Log In</h2>
        <div className="border-2 border-blue-500 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
