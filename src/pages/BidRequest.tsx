import { useSelector } from 'react-redux';
import { ErrorResponse, useNavigate, useParams } from 'react-router-dom';
import { selectUser } from '../redux/Features/selector';
import { useGetProductQuery } from '../redux/Features/productApiSlice';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useBidRequestMutation } from '../redux/Features/bidApiSlice';

function BidRequest() {
    const [amount, setAmount] = useState<number | string>(0);
    const [message, setMessage] = useState<string>('');
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading } = useGetProductQuery(id);
    const userInfo = useSelector(selectUser);
    const navigate = useNavigate();

    const [bidRequest, { isLoading: loading }] = useBidRequestMutation();

    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await bidRequest({ amount, message, productId: product?._id, sellerId: product?.seller, bidderId: userInfo?._id, productName: product?.name, bidderName: userInfo?.username });

            if ('data' in res) {
                toast.success('Bid request sent successfully');
                setAmount('');
                setMessage('');
                navigate('/');
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 max-w-xl mx-auto">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">Place Your Bid</h1>
                    <form className="space-y-4 " onSubmit={onSubmitHandler}>
                        <label className="block  text-xl font-bold text-gray-700">
                            <span className="text-sm">Product ID : </span> {product?._id}
                        </label>
                        <label className="block font-semibold text-gray-700">
                            <span className="text-sm">Product owner ID : </span> {product?.seller}
                        </label>

                        <label className="block  font-semibold text-gray-700">
                            <span className="text-sm">Bidder ID : </span> {userInfo?._id}
                        </label>
                        <label className="block font-semibold text-gray-700">
                            <span className="text-sm">Bidder name : </span> {userInfo?.username}
                        </label>
                        <label className="block font-semibold text-gray-700">
                            <span className="text-sm">Product Name : </span> {product?.name}
                        </label>

                        <div>
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">
                                Bid Amount
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                name="amount"
                                id="amount"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Enter Bid Amount"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                Message (Optional)
                            </label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                rows={4}
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                placeholder="Enter a message (optional)"
                            />
                        </div>

                        <button disabled={loading} type="submit" className="w-full text-white bg-primary hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center">
                            {loading ? 'Submitting...' : 'Submit Bid'}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default BidRequest;
