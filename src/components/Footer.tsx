import { Link } from "react-router-dom";
import logo from "/logo.png";
function Footer() {
  return (
    <div className="bg-gray-700 text-white max-w-screen-2xl px-20 py-5 mx-auto">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm  sm:text-center">
          Copyright © 2024 BITS College | Powered by BITS College
        </span>
        <ul className="">
          <li className="mb-2 ">
            <Link to="" className="hover:underline">
              PrivacyPolicy
            </Link>
          </li>
          <li className="">
            <Link to="" className="hover:underline">
              Terms&amp;Conditions
            </Link>
          </li>
        </ul>
        <img src={logo} className="h-16" />
      </div>
    </div>
  );
}

export default Footer;
