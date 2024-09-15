import { useState } from 'react';
import SideNav from '../components/SideNav';

const ManageAccount = () => {
    const [showBalance, setShowBalance] = useState<boolean>(false);
    const balance = 1000;
    const transactions = [
        { type: 'Deposit', amount: 500, date: '2024-09-01' },
        { type: 'Withdraw', amount: 200, date: '2024-09-05' },
        { type: 'Deposit', amount: 300, date: '2024-09-10' }
    ];

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
                            <p className={`text-xl ${showBalance ? 'text-primary' : 'text-gray-300 '}`}>{showBalance ? `${balance.toFixed(2)}` : '*****'}</p>
                            <button onClick={() => setShowBalance(!showBalance)} className="ml-2 text-gray-600">
                                {showBalance ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="text-lg font-semibold mb-2">Transactions</h3>
                        <ul className="divide-y divide-gray-200">
                            {transactions.map((transaction, index) => (
                                <li key={index} className="flex justify-between py-2">
                                    <span className={`font-medium ${transaction.type === 'Withdraw' ? 'text-[#E3A57F]' : 'text-primary'}`}>{transaction.type}</span>
                                    <span className="text-gray-700">{transaction.amount.toFixed(2)}</span>
                                    <span className="text-gray-500">{transaction.date}</span>
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
