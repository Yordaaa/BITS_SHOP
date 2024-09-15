import { ErrorResponse, Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useBidHistoryQuery } from '../redux/Features/bidApiSlice';
import { useState } from 'react';
import { usePaymentMutation } from '../redux/Features/paymentApiSlice';
import { bidProps, chapaPaymentUrlResProps } from '../redux/Features/types';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';

const BidHistory = () => {
    const { data: bids, isLoading } = useBidHistoryQuery();
    const [expandedBids, setExpandedBids] = useState(new Set());
    const [payment, { isLoading: loading }] = usePaymentMutation();
    const userInfo = useSelector(selectUser);

    const toggleBid = (bidId: unknown) => {
        const newExpandedBids = new Set(expandedBids);
        if (newExpandedBids.has(bidId)) {
            newExpandedBids.delete(bidId);
        } else {
            newExpandedBids.add(bidId);
        }
        setExpandedBids(newExpandedBids);
    };

    const handleProceedToPayment = async (bid: bidProps) => {
        try {
            const res = await payment({
                firstName: userInfo?.firstName,
                lastName: userInfo?.lastName,
                email: userInfo?.email,
                price: bid.amount,
                productId: bid.productId,
                sellerId: bid.sellerId,
                productName: bid.productName
            });

            if ('data' in res) {
                const { data } = res as { data: chapaPaymentUrlResProps };
                window.location.replace(data.data.data.checkout_url);
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="py-8 md:px-4 mx-auto w-full max-w-4xl col-span-4 p-5">
                <h1 className="text-2xl font-bold mb-6">Bid History</h1>
                <div className="space-y-4">
                    {isLoading ? (
                        <div className="bg-white shadow-lg rounded-lg p-6 animate-pulse">
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-2/4"></div>
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-3/4"></div>
                        </div>
                    ) : bids && bids.length === 0 ? (
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-700">No Bids Found</h2>
                            <p className="mt-4 text-gray-600">You haven't placed any bids yet.</p>
                        </div>
                    ) : (
                        bids?.map((bid) => (
                            <div key={bid._id} className="bg-white shadow-d rounded-lg p-5 border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-lg font-bold ">Product ID:</p>
                                        <p className="text-gray-600 truncate max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">{bid.productId}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">Status:</p>
                                        <p
                                            className={`text-gray-600 ${bid.status === 'rejected' ? 'bg-red-300 text-white' : bid.status === 'accepted' ? 'bg-green-200' : 'bg-amber-200 text-white'} p-2`}
                                        >
                                            {bid.status}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right mt-4">
                                    <p className="text-gray-600">{new Date(bid.createdAt).toLocaleDateString()}</p>
                                </div>

                                <button className="mt-4 text-[#70C52D] hover:underline" onClick={() => toggleBid(bid._id)}>
                                    {expandedBids.has(bid._id) ? 'See Less' : 'See More'}
                                </button>

                                {expandedBids.has(bid._id) && (
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                                        <p className="text-lg font-bold">Bid Amount:</p>
                                        <p className="text-gray-600">{bid.amount}</p>
                                        <p className="text-lg font-bold">Message:</p>
                                        <p className="text-gray-600">{bid.message || 'N/A'}</p>

                                        {bid.status === 'pending' ? (
                                            <p className="text-lg text-amber-600 mt-4">Your bid is pending approval.</p>
                                        ) : bid.status === 'rejected' ? (
                                            <div className="mt-4">
                                                <p className="text-lg text-red-600">Your bid has been rejected. Do you want to increase the bid amount?</p>
                                                <Link
                                                    to={`/bidrequest/${bid.productId}`}
                                                    className="bg-green-500 text-white max-w-20 font-medium py-1 px-3 rounded-3xl flex items-center hover:bg-opacity-70 mt-2"
                                                >
                                                    Rebid
                                                </Link>
                                            </div>
                                        ) : bid.status === 'accepted' ? (
                                            <div className="mt-4">
                                                <p className="text-lg text-primary">Your bid has been accepted! Would you like to proceed to payment?</p>
                                                <button
                                                    onClick={() => handleProceedToPayment(bid)}
                                                    disabled={loading}
                                                    className="bg-[#70C52D] text-white font-medium py-1 px-3 rounded-3xl flex items-center hover:bg-opacity-70 mt-2"
                                                >
                                                    {loading ? 'Proceeding...' : 'Proceed to Payment'}
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default BidHistory;
