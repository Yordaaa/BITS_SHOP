import { useState } from 'react';
import SideNav from '../components/SideNav';
import { useTransactionsQuery } from '../redux/Features/paymentApiSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/Features/selector';

const ManageAccount = () => {
    const [showBalance, setShowBalance] = useState<boolean>(false);
    const [expandedTransactions, setExpandedTransactions] = useState<Set<string>>(new Set());
    const userInfo = useSelector(selectUser);
    const { data: transactions = [] } = useTransactionsQuery(userInfo?._id);
    console.log(transactions);
    const totalBalance = transactions.reduce((acc, transaction) => acc + parseFloat(transaction.balance), 0).toFixed(2);

    const toggleTransaction = (transactionId: string) => {
        const newExpandedTransactions = new Set(expandedTransactions);
        if (newExpandedTransactions.has(transactionId)) {
            newExpandedTransactions.delete(transactionId);
        } else {
            newExpandedTransactions.add(transactionId);
        }
        setExpandedTransactions(newExpandedTransactions);
    };

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="md:col-span-1 h-full border-r-2">
                <SideNav />
            </div>
            <div className="py-8 md:px-4 mx-auto w-full max-w-3xl col-span-4 p-5">
                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Manage Account</h2>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Balance</h3>
                        <div className="flex items-center">
                            <p className={`text-xl ${showBalance ? 'text-primary' : 'text-gray-300 '}`}>{showBalance ? `${totalBalance} ETB` : '*****'}</p>
                            <button onClick={() => setShowBalance(!showBalance)} className="ml-2 text-gray-600">
                                {showBalance ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                        <ul className="divide-y divide-gray-200">
                            {transactions?.map((transaction) => (
                                <li key={transaction._id} className="py-2">
                                    <div className="flex justify-between items-center">
                                        <span
                                            className={`font-medium ${transaction.type === 'Withdraw' ? 'text-[#E3A57F]' : 'text-primary truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis'}`}
                                        >
                                            {transaction.productName}
                                        </span>
                                        <span className="text-gray-700">{parseFloat(transaction.balance).toFixed(2)} ETB</span>
                                        <span className="text-gray-500">{new Date(transaction.created_at).toLocaleDateString()}</span>
                                        <button onClick={() => toggleTransaction(transaction._id)} className="ml-2 text-primary hover:underline">
                                            {expandedTransactions.has(transaction._id) ? 'See Less' : 'See More'}
                                        </button>
                                    </div>
                                    {expandedTransactions.has(transaction._id) && (
                                        <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                                            <p className="text-lg font-bold">Customer Name</p>

                                            <p className="text-gray-600">
                                                {transaction.customerFirstName} {transaction.customerLastName}
                                            </p>
                                            <p className="text-lg font-bold">Transaction ID:</p>
                                            <p className="text-gray-600">{transaction._id}</p>
                                            <p className="text-lg font-bold">Bits Transaction Fees:</p>
                                            <p className="text-gray-600">{parseFloat(transaction.bits_transaction_charge).toFixed(2)} ETB</p>
                                            <p className="text-lg font-bold">Chapa Transaction Fees:</p>
                                            <p className="text-gray-600">{parseFloat(transaction.chapa_transactio_charge).toFixed(2)} ETB</p>

                                            <p className="text-lg font-bold">Product Price</p>

                                            <p className="text-gray-600">{parseFloat(transaction.price).toFixed(2)} ETB</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white shadow-sm rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Withdraw</h3>
                    <div className="flex gap-3">
                        <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Enter amount to withdraw" />
                        <button className="mt-3 bg-primary text-white py-1 px-4 rounded-3xl hover:bg-opacity-80 transition w-fit">Withdraw</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageAccount;
