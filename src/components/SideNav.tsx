import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  return (
    <div className="flex flex-col md:flex-row  mx-auto h-full mt-5">
      <nav className=" text-white w-full p-4">
        
        <ul className="mt-4">
          <li>
            <Link
              to="/profile"
              className={`block p-2 rounded-3xl ${
                location.pathname === "/profile"
                  ? "bg-gray-50 text-black  border"
                  : "bg-[#505D68] my-1"
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/addproduct"
              className={`block p-2  rounded-3xl ${
                location.pathname === "/addproduct"
                  ? "bg-gray-50 text-black border border-[#505D68]"
                  : " bg-[#505D68] my-1"
              }`}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/bids"
              className={`block p-2 rounded-3xl ${
                location.pathname === "/bids"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1"
              }`}
            >
              Bids
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`block p-2 rounded-3xl ${
                location.pathname === "/transactions"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68] my-1"
              }`}
            >
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`block p-2 rounded-3xl ${
                location.pathname === "/settings"
                  ? "bg-gray-50 text-black"
                  : "bg-[#505D68]  my-1"
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideNav;
