import { ErrorResponse, useParams } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useBidAcceptMutation, useBidRejectMutation, useSellerGetBidRequestQuery } from '../redux/Features/bidApiSlice';
import { useState } from 'react';
import { RegistrationResponseProps } from '../redux/Features/types';
import { toast } from 'react-toastify';

function Bids() {
    const { id } = useParams();
    const { data: bids, isLoading } = useSellerGetBidRequestQuery(id);
    const [expandedBids, setExpandedBids] = useState(new Set());
    console.log(bids);
    const toggleBid = (bidId: unknown) => {
        const newExpandedBids = new Set(expandedBids);
        if (newExpandedBids.has(bidId)) {
            newExpandedBids.delete(bidId);
        } else {
            newExpandedBids.add(bidId);
        }
        setExpandedBids(newExpandedBids);
    };

    const [bidReject] = useBidRejectMutation();
    const [bidAccept] = useBidAcceptMutation();

    const handleBidReject = async (bidId: string) => {
        try {
            const res = await bidReject(bidId);
            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    const handleBidAccept = async (bidId: string) => {
        try {
            const res = await bidAccept(bidId);
            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Unexpected error occurred');
        }
    };

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="py-8 md:px-4 mx-auto w-full max-w-4xl col-span-4">
                <h1 className="text-2xl font-bold mb-6">Bid Requests</h1>
                <div className="space-y-4">
                    {isLoading ? (
                        <div className="bg-white shadow-lg rounded-lg p-6 animate-pulse">
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-2/4"></div>
                            <div className="h-4 bg-gray-200 rounded-full mb-4 w-3/4"></div>
                        </div>
                    ) : bids && bids.length === 0 ? (
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-2xl font-bold text-gray-700">No Bid Requests Found</h2>
                            <p className="mt-4 text-gray-600">There are no bids for this product.</p>
                        </div>
                    ) : (
                        bids?.map((bid) => (
                            <div key={bid._id} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-lg font-bold">Product ID:</p>
                                        <p className="text-gray-600 truncate max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">{bid.productId}</p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold">Status:</p>
                                        <p className="text-gray-600">{bid.status}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <p className="text-lg font-bold">Bid Amount:</p>
                                        <p className="text-gray-600">{bid.amount}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-bold">Date:</p>
                                        <p className="text-gray-600">{new Date(bid.createdAt).toLocaleDateString()}</p>
                                    </div>
                                </div>
                                <button className="mt-4 text-blue-500 hover:underline" onClick={() => toggleBid(bid._id)}>
                                    {expandedBids.has(bid._id) ? 'Show Less' : 'Show More'}
                                </button>
                                {expandedBids.has(bid._id) && (
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                                        {bid.status === 'accepted' ? (
                                            <div>
                                                <p className="text-gray-600">{bid.message || 'N/A'}</p>

                                                <p className="text-lg font-bold text-green-600">Bid Accepted</p>
                                            </div>
                                        ) : bid.status === 'rejected' ? (
                                            <div>
                                                <p className="text-gray-600">{bid.message || 'N/A'}</p>
                                                <p className="text-lg font-bold text-red-600">Bid Rejected</p>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-lg font-bold">Message:</p>
                                                <p className="text-gray-600">{bid.message || 'N/A'}</p>
                                                <div className="flex justify-end mt-4 space-x-2">
                                                    <button
                                                        onClick={() => handleBidAccept(bid._id)}
                                                        className="bg-primary text-white font-medium py-1 px-3 rounded-3xl flex items-center hover:bg-opacity-70"
                                                    >
                                                        Accept
                                                    </button>
                                                    <button
                                                        onClick={() => handleBidReject(bid._id)}
                                                        className="bg-[#E3A57F] text-white font-medium py-1 px-3 rounded-3xl flex items-center hover:bg-opacity-70"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Bids;
