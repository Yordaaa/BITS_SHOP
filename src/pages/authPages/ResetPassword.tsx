import { useState } from 'react';
import { Link } from 'react-router-dom';

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto">
            <img
                src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative max-w-[26rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-32 bg-white">
                <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto pt-3 text-center">Reset Password</h1>
                <hr className="w-16 h-1 mx-auto my-2 bg-primary border-0 rounded" />

                <form>
                    <div className="relative mt-3">
                        <input type={showPassword ? 'text' : 'password'} className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary" placeholder="Enter new password" required />
                        <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                            <i className="fas fa-key"></i>
                        </div>
                        <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                    </div>
                    <div className="relative">
                        <input type={showConfirmPassword ? 'text' : 'password'} className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary" placeholder="Confirm new password" required />
                        <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                            <i className="fas fa-key"></i>
                        </div>
                        <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                    </div>
                    <button type="submit" className="w-full text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mt-5">
                        Reset Password
                    </button>
                </form>
                <p className="text-sm font-light text-gray-500">
                    Remembered your password?
                    <Link to="/login" className="font-medium hover:underline text-blue-400">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ResetPassword;
