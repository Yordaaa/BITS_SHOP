import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative max-w-[26rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-32 bg-white">
        <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto pt-3 text-center">
          Sign in
        </h1>
        <hr className="w-16 h-1 mx-auto my-2 bg-primary border-0 rounded " />

        <div className="relative">
          <input
            type="text"
            className="py-3 ps-8 block w-full border-b-2  text-sm  focus:border-b-primary "
            placeholder="Enter id"
          />
          <div className="absolute inset-y-0 left-0 flex items-center  ps-2">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <div className="relative">
          <input
            type="password"
            className="py-3 ps-8 block w-full border-b-2  text-sm  focus:border-b-primary "
            placeholder="Enter password"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-2">
            <i className="fas fa-key"></i>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500">
                Remember me
              </label>
            </div>
          </div>
          <Link
            to="/forget"
            className="text-sm font-medium hover:underline text-blue-400"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
        >
          Sign in
        </button>
        <p className="text-sm font-light text-gray-500">
          Don’t have an account yet?
          <Link
            to="/signup"
            className="font-medium hover:underline text-blue-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
