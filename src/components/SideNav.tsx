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
              className={`block py-2 pl-5 rounded-3xl ${
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
              className={`block py-2 pl-5 rounded-3xl ${
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
    className={`block py-2 pl-5 rounded-3xl flex items-center justify-between ${
      location.pathname === "/bids"
        ? "bg-gray-50 text-black"
        : "bg-[#505D68] my-1 text-white"
    }`}
  >
    <span>Bids</span>
    <div className="relative">
      <h1 className="bg-[#E3A57F] rounded-full w-5 h-5 flex items-center justify-center text-black absolute -top-2 right-2">
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
              Transactions
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`block py-2 pl-5 rounded-3xl ${
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
