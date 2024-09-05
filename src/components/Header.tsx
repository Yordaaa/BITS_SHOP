import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/Features/selector";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const userInfo = useSelector(selectUser);
  console.log(userInfo);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 md:px-8">
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src={logo} className="h-10 md:h-16 w-auto" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <i className="text-2xl fas fa-bars"></i>
          </button>
        </div>
        <PopoverGroup className="hidden md:flex md:gap-x-8 lg:gap-x-12 text-lg">
          <Link
            to="/"
            className={`leading-6 ${
              isActive("/") ? "text-primary" : "text-gray-500"
            } hover:text-primary`}
          >
            Home
          </Link>
          <Link
            to="market"
            className={`leading-6 ${
              isActive("/market") ? "text-primary" : "text-gray-500"
            } hover:text-primary`}
          >
            Market
          </Link>
          <Link
            to="about"
            className={`leading-6 ${
              isActive("/about") ? "text-primary" : "text-gray-500"
            } hover:text-primary`}
          >
            About
          </Link>
          <Link
            to="contact"
            className={`leading-6 ${
              isActive("/contact") ? "text-primary" : "text-gray-500"
            } hover:text-primary`}
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          {localStorage.getItem("userInfo") ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <label className="pr-3">welcome {userInfo?.firstName}</label>
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Post product
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      History
                    </a>
                  </MenuItem>

                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          ) : (
            <Link
              to="login"
              className="text-sm font-semibold leading-6 text-primary border-primary p-2 px-5 rounded-3xl border-2 hover:text-white hover:bg-primary"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="h-6 w-6">✖</span>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    isActive("/") ? "text-primary" : "text-gray-700"
                  } hover:bg-gray-50`}
                >
                  Home
                </Link>
                <Link
                  to="market"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    isActive("/market") ? "text-primary" : "text-gray-700"
                  } hover:bg-gray-50`}
                >
                  Market
                </Link>
                <Link
                  to="about"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    isActive("/about") ? "text-primary" : "text-gray-700"
                  } hover:bg-gray-50`}
                >
                  About
                </Link>
                <Link
                  to="contact"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                    isActive("/contact") ? "text-primary" : "text-gray-700"
                  } hover:bg-gray-50`}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
