import { Link, useLocation } from 'react-router-dom';
function SideNav() {
    const location = useLocation();

    return (
        <div className="flex flex-col md:flex-row mx-auto  mt-5 h-screen">
            <nav className="text-white w-full p-4">
                <ul className="mt-4">
                    <li>
                        <Link to="/addproduct" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/addproduct' ? 'bg-gray-50 text-black' : 'bg-[#505D68] my-1'}`}>
                            <span className="hidden md:inline">Add Product</span>
                            <i className="fas fa-plus md:hidden"></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/manage"
                            className={` py-2 pl-5 rounded-3xl flex items-center justify-between ${location.pathname === '/manage' ? 'bg-gray-50 text-black' : 'bg-[#505D68] my-1 text-white'}`}
                        >
                            <span className="hidden md:inline">ManageProducts</span>
                            <i className="fas fa-gavel md:hidden"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageaccount" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/manageaccount' ? 'bg-gray-50 text-black' : 'bg-[#505D68] my-1'}`}>
                            <span className="hidden md:inline">Manage Acccount</span>
                            <i className="fas fa-exchange-alt md:hidden"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bid-history" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/bid-history' ? 'bg-gray-50 text-black border' : 'bg-[#505D68] my-1'}`}>
                            <span className="hidden md:inline">Bid History</span>
                            <i className="fas fa-user md:hidden"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className={`block py-2 pl-5 rounded-3xl ${location.pathname === '/settings' ? 'bg-gray-50 text-black' : 'bg-[#505D68] my-1'}`}>
                            <span className="hidden md:inline">Settings</span>
                            <i className="fas fa-cog md:hidden"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNav;
