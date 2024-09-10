import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../redux/Features/productApiSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';

export const Checkout = () => {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading } = useGetProductQuery(id);
    const userInfo = useSelector(selectUser);
    console.log(userInfo?.firstName);

    return (
        <>
            {isLoading ? (
                <div className="text-center py-10">Loading...</div>
            ) : (
                <div className="max-w-xl mx-auto py-10 mb-0 md:mb-10">
                    <div className="px-4 sm:px-0">
                        <h3 className="font-semibold text-2xl leading-7 text-gray-900">Checkout Information</h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Review your order details and proceed to payment.</p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">First name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userInfo?.firstName}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Last name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userInfo?.lastName}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{userInfo?.email}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Product ID</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?._id}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Product Name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.name}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Description</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.description}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Category</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.category}</dd>
                            </div>
                            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Price</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product?.price}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition w-full">
                            Proceed to payment
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
