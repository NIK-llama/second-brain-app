import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signup(e: React.FormEvent) {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(`${BACKEND_URL}/api/v1/signup`, {
      username,
      password,
    });
    navigate("/signin");
    alert("You have Signed up!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 font-sans p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:shadow-3xl">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mt-4">
            CREATE YOUR ACCOUNT
          </h1>
          <p className="text-sm text-blue-500 font-extrabold mt-2">
            START BUILDING YOUR SECOND BRAIN TODAY
          </p>
        </div>

        <form onSubmit={signup} className="space-y-6">
          <div>
            <input
              ref={usernameRef}
              id="username"
              name="username"
              type="text"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
              placeholder="Username"
            />
          </div>
          <div>
            <input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
