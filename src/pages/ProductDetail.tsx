import React from 'react';
import { Gallery } from '../components/Gallery';
import { ErrorResponse, Link, useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../redux/Features/productApiSlice';
import { useAddToWishlistMutation, useGetWishlistQuery, useRemoveFromWishlistMutation } from '../redux/Features/useApiSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';

export const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();
    const userInfo = useSelector(selectUser);

    const { data: product, isLoading } = useGetProductQuery(id);

    const [addToWishlist] = useAddToWishlistMutation();
    const [removeFromWishlist] = useRemoveFromWishlistMutation();
    if (userInfo) {
        var { data } = useGetWishlistQuery();
    }

    const handleAddToWishlist = async (productId: string | undefined) => {
        try {
            if (userInfo === null) {
                navigate('/login');
                return;
            }
            const res = await addToWishlist({ productId });
            if ('data' in res) {
                toast.success('added to wishlist');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    const handleRemoveFromWishlsit = async (productId: string | undefined) => {
        try {
            if (userInfo === null) {
                navigate('/login', {
                    state: `/${productId}`
                });
                return;
            }
            const res = await removeFromWishlist({ productId });
            if ('data' in res) {
                toast.success('Removed from wishlist');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    const isInWishlist = data?.wishlist.some((item) => item._id === product?._id);
    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : (
                <div className="max-w-4xl mx-auto py-10 mb-0 md:mb-10">
                    <div className="flex flex-col justify-between md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-10 md:mb-0">{product && product.images && <Gallery images={product.images} />}</div>
                        <div className="flex-1 md:pl-6 w-full px-5">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-bold">{product?.name}</h1> ({product?.status})
                                </div>
                                {isInWishlist ? (
                                    <button
                                        onClick={() => handleRemoveFromWishlsit(product?._id)}
                                        className={`far fa-heart border rounded-full px-2 py-1 text-xl ${isInWishlist ? 'bg-primary text-white' : ' border-gray-500'} mr-2`}
                                    ></button>
                                ) : (
                                    <button
                                        onClick={() => handleAddToWishlist(product?._id)}
                                        className="far fa-heart border rounded-full px-2 py-1 text-xl hover:bg-primary hover:text-white border-gray-500 text-primary mr-2"
                                    ></button>
                                )}
                            </div>
                            <p className="mt-4 text-gray-600">{product?.category}</p>
                            <p className="text-xl text-gray-700 mt-2 font-bold">{product?.price}</p>
                            <p className="mt-4 text-gray-600">{product?.description}</p>
                            <div>
                                <p className="mt-4 text-gray-600">Posted by: Yordanos Tibebu</p>
                                <p className="text-gray-600">0910133245</p>
                            </div>
                            <Link to={'/checkout'} className="mt-6 bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition">
                                Buy now
                            </Link>
                            <Link
                                to={`/bidrequest/${product?._id}`}
                                className="ml-4 mt-6 border-[#E3A57F] border text-[#E3A57F] hover:text-white hover:bg-[#E3A57F] hover py-2 px-4 rounded-3xl hover:bg-opacity-90 transition"
                            >
                                Request bid
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
