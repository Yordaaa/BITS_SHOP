import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row mx-auto h-full mt-5">
      <nav className="text-white w-full p-4">
        <ul className="mt-4">
          <li>
            <Link
              to="/profile"
              className={`block py-2 pl-5 rounded-3xl ${
                location.pathname === "/profile"
                  ? "bg-gray-50 text-black border"
                  : "bg-[#505D68] my-1"
              }`}
            >
              <span className="hidden md:inline">Profile</span>
              <i className="fas fa-user md:hidden"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/addproduct"
              className={`block py-2 pl-5 rounded-3xl ${
                location.pathname === "/addproduct"
                  ? "bg-gray-50 text-black border border-[#505D68]"
                  : "bg-[#505D68] my-1"
              }`}
            >
              <span className="hidden md:inline">Add Product</span>
              <i className="fas fa-plus md:hidden"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/bids"
              className={` py-2 pl-5 rounded-3xl flex items-center justify-between ${
                location.pathname === "/bids"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1 text-white"
              }`}
            >
              <span className="hidden md:inline">Bids</span>
              <div className="relative">
                <i className="fas fa-gavel md:hidden"></i>
                <h1 className="bg-[#E3A57F] hidden  rounded-full w-5 h-5 md:flex items-center justify-center text-black absolute -top-2 right-2">
                  1
                </h1>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`block py-2 pl-5 rounded-3xl ${
                location.pathname === "/transactions"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1"
              }`}
            >
              <span className="hidden md:inline">Transactions</span>
              <i className="fas fa-exchange-alt md:hidden"></i>
            </Link>
          </li>
          <li>
            <Link
              to="/messages"
              className={`block py-2 pl-5 rounded-3xl items-center justify-between ${
                location.pathname === "/messages"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1 text-white"
              }`}
            >
              <span className="hidden md:inline">Messages</span>
              <div className="relative">
                <i className="far fa-comment md:hidden"></i>
                <h1 className="hidden md:flex justify-center items-center ml-3 absolute -top-6 right-3">
                  <i className="far fa-comment text-2xl relative text-primary"></i>
                  <p className="text-white bg-[#E3A57F] hover:bg-red-600 absolute text-[12px] rounded-full w-4 h-4 text-center ml-5 mb-5">
                    4
                  </p>
                </h1>
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`block py-2 pl-5 rounded-3xl ${
                location.pathname === "/settings"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1"
              }`}
            >
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
