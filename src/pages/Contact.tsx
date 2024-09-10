import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact us</h1>
                    <p className="mt-1 text-gray-600">We'd love to talk about how we can help you.</p>
                </div>

                <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800">Fill in the form</h2>

                        <form>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="sr-only">
                                            First Name
                                        </label>
                                        <input type="text" id="firstName" className="py-3 px-4 block w-full border border-gray-200 rounded-3xl  " placeholder="First Name" />
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="sr-only">
                                            Last Name
                                        </label>
                                        <input type="text" id="lastName" className="py-3 px-4 block w-full border border-gray-200 rounded-3xl  " placeholder="Last Name" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input type="email" id="email" className="py-3 px-4 block w-full border border-gray-200 rounded-3xl  " placeholder="Email" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone Number
                                    </label>
                                    <input type="text" id="phone" className="py-3 px-4 block w-full border border-gray-200 rounded-3xl  " placeholder="Phone Number" />
                                </div>

                                <div>
                                    <label htmlFor="details" className="sr-only">
                                        Details
                                    </label>
                                    <textarea id="details" rows={4} className="py-3 px-4 block w-full border border-gray-200 rounded-3xl  " placeholder="Details"></textarea>
                                </div>
                            </div>

                            <div className="mt-4 grid">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-3xl border border-transparent bg-primary text-white hover:bg-opacity-90 "
                                >
                                    Send message
                                </button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className=" text-gray-500">We'll get back to you in 1-2 business days.</p>
                            </div>
                        </form>
                    </div>

                    <div className="divide-y divide-gray-200">
                        <div className="flex gap-x-7 py-6">
                            <i className="fas fa-info-circle fa-2x mt-1.5 text-gray-800"></i>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800">Knowledgebase</h3>
                                <p className="mt-1  text-gray-500">We're here to help with any questions.</p>
                                <a className="mt-2 inline-flex items-center gap-x-2  font-medium text-gray-600 hover:text-gray-800" href="#">
                                    Contact support
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-x-7 py-6">
                            <i className="fas fa-question-circle fa-2x mt-1.5 text-gray-800"></i>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800">FAQ</h3>
                                <p className="mt-1  text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                                <a className="mt-2 inline-flex items-center gap-x-2  font-medium text-gray-600 hover:text-gray-800" href="#">
                                    Visit FAQ
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-x-7 py-6">
                            <i className="fas fa-code fa-2x mt-1.5 text-gray-800"></i>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800">Developer APIs</h3>
                                <p className="mt-1  text-gray-500">If you need it you can ask here.</p>
                                <a className="mt-2 inline-flex items-center gap-x-2  font-medium text-gray-600 hover:text-gray-800" href="#">
                                    Contact sales
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-x-7 py-6">
                            <i className="fas fa-envelope fa-2x mt-1.5 text-gray-800"></i>
                            <div className="grow">
                                <h3 className="font-semibold text-gray-800">Contact us by email</h3>
                                <p className="mt-1  text-gray-500">If you wish to write us an email instead, please use</p>
                                <a className="mt-2 inline-flex items-center gap-x-2  font-medium text-gray-600 hover:text-gray-800" href="mailto:example@site.com">
                                    example@bits.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
