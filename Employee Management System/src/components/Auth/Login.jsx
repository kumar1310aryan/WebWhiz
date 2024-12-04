import { useState } from "react";
import PropTypes from "prop-types";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        {/* <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Welcome Back
        </h1> */}
        <form
          className="space-y-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label className="block text-m font-medium text-black mb-1">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              aria-label="Email Address"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-black"
              required
            />
          </div>
          <div>
            <label className="block text-m font-medium text-black mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              aria-label="Password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none text-black"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-black focus:ring-black rounded border-gray-300 focus:ring-offset-2"
              />
              <span className="ml-2 text-sm text-black">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:outline-none transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-black hover:underline focus:outline-none">
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.node.isRequired,
};

export default Login;
