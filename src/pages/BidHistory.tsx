import { useBidHistoryQuery } from '../redux/Features/bidApiSlice';

const BidHistory = () => {
    const { data } = useBidHistoryQuery();
    console.log(data);
    return <div>BidHistory</div>;
};
export default BidHistory;
