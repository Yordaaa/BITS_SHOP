import { Link } from 'react-router-dom';

function ResetMessage() {
    return (
        <>
            <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto ">
                <img
                    src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className=" relative w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow max-w-screen-md mt-20 mb-40 mx-auto m-10 pb-5 ">
                    <i className="fas fa-paper-plane mr-2 text-5xl p-5 text-Primary"></i>
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Email sent!</h1>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg ">
                        We’ve sent an email to your email address. Follow the steps provided in the email to update your password or select Log In if you don’t want to change your password at this
                        time.
                    </p>
                    <Link to="/login" type="submit" className=" text-white bg-primary hover:opacity-90 font-medium rounded-lg text-sm px-8 py-2.5 text-center">
                        Login
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ResetMessage;
