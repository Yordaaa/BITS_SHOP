import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';

const ManageProducts = () => {
    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="col-span-1 h-full border-r-2 ">
                <SideNav />
            </div>
            <div className="py-8 px-4 mx-auto w-full max-w-4xl col-span-4 ">
                <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
                    <table className="w-full table-auto ">
                        <thead className="">
                            <tr className=" bg-gray-200 text-gray-600 font-bold">
                                <th className="py-3  rounded-tl-lg">Id</th>
                                <th className="py-3 ">Name</th>
                                <th className="py-3 ">Status</th>
                                <th className="py-3 rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b bg-gray-100">
                                <td className="py-2 text-center">Product Id</td>
                                <td className="py-2 text-center">Product Name</td>
                                <td className="py-2 text-center">Product status</td>
                                <td className="flex justify-center space-x-2 py-2">
                                    <button className=" text-[#E3A57F] text-xl flex items-center">
                                        <i className="fas fa-edit mr-2"></i>
                                    </button>
                                    <button className=" text-red-600 text-xl flex items-center">
                                        <i className="fas fa-trash-alt mr-2"></i>
                                    </button>
                                    <Link to="/bids" className="bg-primary text-white font-medium py-1 px-3 rounded-3xl flex items-center">
                                        <i className="fas fa-gavel mr-2"></i>
                                        Bids
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageProducts;
