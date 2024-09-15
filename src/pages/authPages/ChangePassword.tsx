import { FormEvent, useState } from 'react';
import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../redux/Features/authApiSlice';
import { toast } from 'react-toastify';
import { RegistrationResponseProps } from '../../redux/Features/types';
import SideNav from '../../components/SideNav';

function ChangePassword() {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const navigate = useNavigate();
    const [changePassword, { isLoading }] = useChangePasswordMutation();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await changePassword({
                oldPassword,
                newPassword,
                confirmNewPassword
            });
            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
                navigate('/settings');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };
    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="relative flex items-center justify-center h-fit max-w-screen-2xl mx-auto col-span-4 md:col-span-3 p-3 w-full">
                <div className="relative max-w-[26rem] w-full space-y-3 mt-10 border p-10 rounded-3xl mx-auto my-32 bg-white">
                    <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto pt-3 text-center">Change Password</h1>
                    <hr className="w-16 h-1 mx-auto my-2 bg-primary border-0 rounded" />

                    <form onSubmit={handleSubmit}>
                        <div className="relative mt-3">
                            <input
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                type={showOldPassword ? 'text' : 'password'}
                                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                                placeholder="Enter old password"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                                <i className="fas fa-key"></i>
                            </div>
                            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowOldPassword(!showOldPassword)}>
                                {showOldPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                                placeholder="Enter new password"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                                <i className="fas fa-key"></i>
                            </div>
                            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                        <div className="relative">
                            <input
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                type={showConfirmPassword ? 'text' : 'password'}
                                className="py-3 ps-8 block w-full border-b-2 text-sm focus:border-b-primary"
                                placeholder="Confirm new password"
                                required
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center ps-2">
                                <i className="fas fa-key"></i>
                            </div>
                            <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="w-full text-white bg-primary hover:opacity-90 transition-all duration-200 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mt-5"
                        >
                            {isLoading ? 'Updating...' : 'Update Password'}
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
        </section>
    );
}

export default ChangePassword;
