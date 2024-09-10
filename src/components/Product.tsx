import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import { productResTypeProps } from '../redux/Features/types';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';
import { useAddToWishlistMutation, useGetWishlistQuery, useRemoveFromWishlistMutation } from '../redux/Features/useApiSlice';
import { toast } from 'react-toastify';

interface ProductProps {
    products: productResTypeProps[] | undefined;
}

function Product({ products }: ProductProps) {
    const navigate = useNavigate();
    const userInfo = useSelector(selectUser);

    const [addToWishlist] = useAddToWishlistMutation();
    const [removeFromWishlist] = useRemoveFromWishlistMutation();
    if (userInfo) {
        var { data } = useGetWishlistQuery();
    }

    const handleAddToWishlist = async (productId: string) => {
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

    const handleRemoveFromWishlsit = async (productId: string) => {
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
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
            {products?.map((product) => {
                const isInWishlist = data?.wishlist.some((item) => item._id === product._id);
                return (
                    <div key={product._id} className="group relative bg-white border rounded-lg shadow-md overflow-hidden">
                        <div className="relative">
                            <img src={product.images?.[0].secure_url} alt={product.name} className="w-full h-48 object-contain" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white hover:text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Link to={`/product/${product._id}`} className="w-full py-2">
                                    Show Details
                                </Link>
                            </div>
                        </div>
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p className="mt-2 text-gray-600 truncate">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="mt-4 text-xl font-bold">{product.price}</div>
                                {isInWishlist ? (
                                    <button
                                        onClick={() => handleRemoveFromWishlsit(product._id)}
                                        className={`far fa-heart border rounded-full px-2 py-1 text-xl   ${isInWishlist ? 'bg-primary text-white' : ' border-gray-500'}  mr-2`}
                                    ></button>
                                ) : (
                                    <button
                                        onClick={() => handleAddToWishlist(product._id)}
                                        className="far fa-heart border rounded-full px-2 py-1 text-xl hover:bg-primary hover:text-white border-gray-500 text-primary mr-2"
                                    ></button>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Product;
