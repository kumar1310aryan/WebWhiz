import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-pink-500 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h1>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-zinc-950"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none text-zinc-950"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="text-pink-500 focus:ring-pink-500 rounded border-gray-300 focus:ring-offset-2"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-pink-500 hover:underline focus:outline-none"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
