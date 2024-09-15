
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';
import { useState } from 'react';

export const Checkout = () => {
    const userInfo = useSelector(selectUser);

    const [firstName, setFirstName] = useState<string>(userInfo?.firstName || '');
    const [lastName, setLastName] = useState<string>(userInfo?.lastName || '');
    const [email, setEmail] = useState<string>(userInfo?.email || '');

    return (
        <>
                <div className="max-w-xl mx-auto py-10 mb-0 md:mb-10">
                    <form>
                        <div className="px-4 sm:px-0">
                            <h3 className="font-semibold text-2xl leading-7 text-gray-900">Checkout Information</h3>
                            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Review your order details and fill in your information.</p>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">First name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="text"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                            placeholder="Enter your first name"
                                            required
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Last name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="text"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                            placeholder="Enter your last name"
                                            required
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className=" p-1  block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Product ID</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="text" className=" p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" required />
                                    </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Product Name</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="text" className="p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" required />
                                    </dd>
                                </div>
                                <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        <input type="text" className="p-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" required />
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition w-full">
                                Proceed to payment
                            </button>
                        </div>
                    </form>
                </div>
        </>
    );
};
