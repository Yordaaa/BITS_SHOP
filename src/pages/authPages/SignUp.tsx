import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../redux/Features/authApiSlice";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registration, { isLoading }] = useRegistrationMutation();
  const navigate = useNavigate();

  const registrationHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const res = await registration({
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        schoolId,
        phoneNumber,
        username,
      }).unwrap();

      console.log(res);
      if (res.success) {
        toast.success(res?.message);
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative max-w-[26rem] md:max-w-[40rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-32 bg-white">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto py-3 text-center">
          Don't have an account?{" "}
          <span className="text-primary">Register now</span>
        </h1>

        <form onSubmit={registrationHandler}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5">
            <div className="relative">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="First Name"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Last Name"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                value={schoolId}
                onChange={(e) => setSchoolId(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="School ID"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-id-card"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Email"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Username"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-user"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Phone Number"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-phone"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Password"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-lock"></i>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                placeholder="Confirm Password"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                <i className="fas fa-lock"></i>
              </div>
            </div>
          </div>
          <div>
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
                  <a
                    href="#"
                    className="font-medium hover:underline text-blue-400"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full col-span-2 text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        <p className="text-sm font-light text-gray-500">
          Already have an account?{" "}
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
