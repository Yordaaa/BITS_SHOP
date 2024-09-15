import { ChangeEvent, FormEvent, useState } from 'react';
import { ErrorResponse, useNavigate } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import { useUpdateProfileImgMutation, useUpdateProfileMutation } from '../../redux/Features/useApiSlice';
import avatar from '/avatar.png';
import { UserProps } from '../../redux/Features/types';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../redux/Features/authSlice';
import { selectUser } from '../../redux/Features/selector';
function Profile() {
    const userInfo = useSelector(selectUser);
    const navigate = useNavigate();
    console.log(userInfo);
    const [formData, setFormData] = useState({
        username: userInfo?.username || '',
        email: userInfo?.email || '',
        firstName: userInfo?.firstName || '',
        lastName: userInfo?.lastName || '',
        schoolId: userInfo?.schoolId || '',
        phoneNumber: userInfo?.phoneNumber || ''
    });

    const dispatch = useDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();
    const [updateProfileImg, { isLoading: loading }] = useUpdateProfileImgMutation();

    const handleProfileImgChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const formData = new FormData();

            formData.append('profile', file);

            if (userInfo?.profileImg.public_id) {
                formData.append('public_id', userInfo?.profileImg.public_id);
            }

            try {
                const res = await updateProfileImg(formData);

                if ('data' in res) {
                    const { data } = res as { data: UserProps };
                    dispatch(setCredentials(data));
                    toast.success('Profile image updated successfully');
                } else {
                    const { error } = res as { error: ErrorResponse };
                    toast.error(error.data.message);
                }
            } catch (error) {
                toast.error('Unexpected error occurred');
            }
        }
    };

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await updateProfile(formData);

            if ('data' in res) {
                const { data } = res as { data: UserProps };
                toast.success('Profile updated successfully');
                console.log(data);
                dispatch(setCredentials(data));
                navigate('/settings');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Unexpected error occurred');
        }
    };
    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="px-4 mx-auto w-full max-w-xl col-span-4 md:col-span-3">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">Edit your profile</h1>
                    <div className="w-full p-4 text-center bg-white max-w-screen-sm mx-auto mt-5">
                        <div className="flex flex-col items-center">
                            <div className="relative flex h-[100px] w-[100px] rounded-full bg-green-500 overflow-hidden justify-center items-center cursor-pointer">
                                <img src={userInfo?.profileImg.secure_url ? userInfo.profileImg.secure_url : avatar} alt="Profile" className="absolute h-full w-full object-cover" />
                                <div className="flex h-8 w-full bottom-0 bg-[rgb(0,0,0,0.5)] absolute items-center justify-center">
                                    <i className="fas fa-camera text-2xl absolute text-white"></i>
                                </div>
                                <input type="file" accept="image/*" disabled={loading} onChange={handleProfileImgChange} className="relative h-full w-full top-0 left-0 opacity-0 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmitHandler}>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                                Username
                            </label>
                            <input
                                type="text"
                                value={formData.username}
                                onChange={handleChange}
                                name="username"
                                id="username"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label htmlFor="schoolId" className="block mb-2 text-sm font-medium text-gray-900">
                                School ID
                            </label>
                            <input
                                type="text"
                                value={formData.schoolId}
                                onChange={handleChange}
                                name="schoolId"
                                id="schoolId"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">
                                First Name
                            </label>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                name="firstName"
                                id="firstName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">
                                Last Name
                            </label>
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                name="lastName"
                                id="lastName"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Your email
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                name="phoneNumber"
                                id="phoneNumber"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <button type="submit" disabled={isLoading} className="w-full text-white bg-primary hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center">
                            {isLoading ? 'Updating...' : ' Update Profile'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Profile;
