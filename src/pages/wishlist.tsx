import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import { useAddToWishlistMutation, useGetWishlistQuery, useRemoveFromWishlistMutation } from '../redux/Features/useApiSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';
import { toast } from 'react-toastify';
import { Gallery } from '../components/Gallery';

function Wishlist() {
    const navigate = useNavigate();
    const userInfo = useSelector(selectUser);

    const [addToWishlist] = useAddToWishlistMutation();
    const [removeFromWishlist] = useRemoveFromWishlistMutation();

    const { data, isLoading } = useGetWishlistQuery();

    const handleAddToWishlist = async (productId: string | undefined) => {
        try {
            if (userInfo === null) {
                navigate('/login');
                return;
            }
            const res = await addToWishlist({ productId });
            if ('data' in res) {
                toast.success('Added to wishlist');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    const handleRemoveFromWishlist = async (productId: string | undefined) => {
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

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!data?.wishlist || data.wishlist.length === 0) {
        return (
            <div className="max-w-4xl mx-auto text-center pt-32 pb-60">
                <h2 className="text-2xl font-bold text-gray-700">Your Wishlist is Empty</h2>
                <p className="mt-4 text-gray-600">Looks like you haven't added anything to your wishlist yet.</p>
                <button onClick={() => navigate('/market')} className="mt-6 bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition">
                    Start Shopping
                </button>
            </div>
        );
    }

    return (
        <>
            {data.wishlist.map((product) => {
                const isInWishlist = data?.wishlist.some((item) => item._id === product?._id);
                return (
                    <div className="max-w-4xl mx-auto py-10 mb-0 md:mb-10" key={product._id}>
                        <div className="flex flex-col justify-between md:flex-row items-center">
                            <div className="w-full md:w-1/2 mb-10 md:mb-0">{product && product.images && <Gallery images={product.images} />}</div>
                            <div className="flex-1 md:pl-6 w-full px-5">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-2xl font-bold">{product?.name}</h1> ({product?.status})
                                    </div>
                                    {isInWishlist ? (
                                        <button
                                            onClick={() => handleRemoveFromWishlist(product?._id)}
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
                                <button className="mt-6 bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition">Buy now</button>
                                <Link
                                    to="/bidrequest"
                                    className="ml-4 mt-6 border-[#E3A57F] border text-[#E3A57F] hover:text-white hover:bg-[#E3A57F] hover py-2 px-4 rounded-3xl hover:bg-opacity-90 transition"
                                >
                                    Request bid
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default Wishlist;
