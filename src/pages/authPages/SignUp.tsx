import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative max-w-[26rem] md:max-w-[40rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-32 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto pt-3 text-center">
          Sign Up
        </h1>
        <hr className="w-16 h-1 mx-auto my-2 bg-primary border-0 rounded" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
          <div className="relative">
            <input
              type="text"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="First Name"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-user"></i>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="Last Name"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-user"></i>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="School ID"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-id-card"></i>
            </div>
          </div>

          <div className="relative">
            <input
              type="email"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="Email"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-envelope"></i>
            </div>
          </div>

          <div className="relative">
            <input
              type="password"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-lock"></i>
            </div>
          </div>

          <div className="relative">
            <input
              type="password"
              className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
              placeholder="Confirm Password"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
              <i className="fas fa-lock"></i>
            </div>
          </div>
        </div>
        <div className="flex items-start pb-2">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500">
              I accept the{" "}
              <a href="#" className="font-medium hover:underline text-blue-400">
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
        >
          Sign Up
        </button>
        <p className="text-sm font-light text-gray-500">
          Already have an account?
          <Link
            to="/login"
            className="font-medium hover:underline text-blue-400"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
