import { useParams } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useSellerGetBidRequestQuery } from '../redux/Features/bidApiSlice';

function Bids() {
    const { id } = useParams();

    const { data: bids } = useSellerGetBidRequestQuery(id);

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2 ">
                <SideNav />
            </div>
            <div className="py-8 md:px-4 mx-auto w-full max-w-2xl col-span-4 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 max-w-xl mx-auto ">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl">Bid Request Details</h1>
                    {bids?.map((bid) => {
                        return (
                            <div className="space-y-4 border-b-2 pb-5 bg-white shadow-md p-5 rounded-lg">
                                <div className="border-b pb-4 mb-4">
                                    <label className="block text-lg font-bold text-gray-700">
                                        <span className="text-sm text-gray-500">Product ID:</span> <strong className="text-gray-800">{bid.productId}</strong>
                                    </label>

                                    <label className="block font-semibold text-gray-700">
                                        <span className="text-sm text-gray-500">Bidder ID:</span> <strong className="text-gray-800">{bid.bidderId}</strong>
                                    </label>
                                    <label className="block font-semibold text-gray-700">
                                        <span className="text-sm text-gray-500">Bid Status:</span> <strong className="text-gray-800">{bid.status}</strong>
                                    </label>
                                </div>

                                <div className="flex justify-between">
                                    <label className="mb-2 text-sm font-medium text-gray-900">
                                        <span className="text-sm text-gray-500">Bid Amount:</span>
                                    </label>
                                    <div className="bg-gray-50 border border-b-2 text-gray-900 sm:text-sm rounded-lg  p-2.5">
                                        <strong className="text-gray-800">{bid.amount}</strong>
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900">
                                        <span className="text-sm text-gray-500">Message:</span>
                                    </label>
                                    <div className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5">
                                        <strong className="text-gray-800">{bid.message}</strong>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <button type="button" className="w-full text-white bg-primary hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center">
                                        Accept Bid
                                    </button>

                                    <button type="button" className="w-full text-white bg-[#E3A57F] hover:bg-opacity-90 font-medium rounded-3xl px-5 py-2 text-center">
                                        Reject Bid
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Bids;
