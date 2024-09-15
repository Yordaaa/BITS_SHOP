import { ErrorResponse, Link } from 'react-router-dom';
import { useForgotPasswordMutation } from '../../redux/Features/authApiSlice';
import { FormEvent, useState } from 'react';
import { RegistrationResponseProps } from '../../redux/Features/types';
import { toast } from 'react-toastify';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await forgotPassword({ email });

            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
                setEmail('');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    return (
        <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto ">
            <img
                src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative max-w-[26rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-48 bg-white">
                <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto pt-3 text-center">Forgot Password</h1>
                <hr className="w-16 h-1 mx-auto my-2 bg-primary border-0 rounded" />

                <form onSubmit={handleOnSubmit}>
                    <div className="relative mt-5">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                            placeholder="Enter your email or school ID"
                            required
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="mt-5 w-full text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center"
                    >
                        {isLoading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>
                <p className="text-sm font-light text-gray-500 mt-5">
                    Remembered your password?
                    <Link to="/login" className="font-medium hover:underline text-blue-400">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
