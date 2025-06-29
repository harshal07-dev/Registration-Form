import React, { useState } from "react";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // state to hold submit data for display
  const [submittedData, setSubmittedData] = useState(null);

  // event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (password.length < 6) {
      setErrorMessage("Please enter atleast 6 character!!");
      return;
    }
    setErrorMessage("");

    console.log("Form submitted", { username, email, password });
    setSubmittedData({ username, email, password });

    // clear the form after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="form-container bg-white p-8 rounded-xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <p className="text-red-600 text-sm mt-2 text-center">
            {errorMessage}
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white font-semibold rounded-md hover:from-red-600 hover:to-blue-600 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>
        {submittedData && (
          <div>
            <h3>Form submission successfully</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
