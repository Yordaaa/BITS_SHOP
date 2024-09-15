import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';
import SideNav from '../components/SideNav';

const Settings = () => {
    const userInfo = useSelector(selectUser);

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="py-8 md:px-4 mx-auto w-full max-w-3xl col-span-4 p-5">
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Settings</h2>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Account Information</h3>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-700">First Name</span>
                            <span className="text-gray-900">{userInfo?.firstName}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-700">Last Name</span>
                            <span className="text-gray-900">{userInfo?.lastName}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-700">Email</span>
                            <span className="text-gray-900">{userInfo?.email}</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <Link to="/profile" className="text-primary hover:underline">
                                Update Profile
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Security</h3>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-700">Two-Factor Authentication</span>
                            <span className="text-gray-900">Disabled</span>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <Link to="/change" className="text-primary hover:underline">
                                Change Password
                            </Link>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-gray-700">Email Notifications</span>
                            <label className="inline-flex relative items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 rounded-full">
                                    <div className="w-[22px] h-[22px] bg-white rounded-full shadow-md "></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-3xl transition w-full">Delete Account</button>
                </div>
            </div>
        </section>
    );
};

export default Settings;
