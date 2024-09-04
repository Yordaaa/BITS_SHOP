import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Product from "../components/Product";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filterOptions = [
  {
    id: "categories",
    label: "Categories",
    options: [
      "Laptops",
      "Smartphones",
      "Tablets",
      "Cameras",
      "Accessories",
      "Others",
    ],
  },
  {
    id: "brand",
    label: "Brand",
    options: ["Apple", "Samsung", "Sony", "LG", "Dell", "Other"],
  },
  {
    id: "price",
    label: "Price Range",
    options: ["0-5000", "5000-10000", "10000-40000", "40000+"],
  },
  {
    id: "features",
    label: "Features",
    options: [
      "4G Connectivity",
      "5G Connectivity",
      "WiFi 6 Support",
      "NFC Support",
    ],
  },
];

export default function ElectronicsFilter() {
  const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Mobile filter dialog */}
      <Dialog
        open={isMobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto h-full w-full max-w-xs flex flex-col bg-white py-4 pb-12 shadow-xl">
            <div className="flex justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="h-10 w-10 rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>x
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              {filterOptions.map(({ id, label, options }) => (
                <Disclosure
                  key={id}
                  as="div"
                  className="border-t border-gray-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full justify-between px-2 py-3 text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{label}</span>
                      <span className="ml-6 flex items-center">
                        <i className="fas fa-plus group-data-[open]:hidden" />
                        <i className="fas fa-minus [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-6">
                      {options.map((option, index) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-mobile-${id}-${index}`}
                            className="ml-3 flex-1 text-gray-500"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between border-b border-gray-200 pb-6 pt-10">
          <h1 className="text-4xl font-bold text-gray-900">Products</h1>

          <div className="flex items-center">
            <Menu as="div" className="relative text-left">
              <MenuButton className="group inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <i className="fas fa-chevron-down ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                {sortOptions.map(({ name, href, current }) => (
                  <MenuItem key={name}>
                    <a
                      href={href}
                      className={`block px-4 py-2 text-sm ${
                        current ? "font-medium text-gray-900" : "text-gray-500"
                      } hover:bg-gray-100`}
                    >
                      {name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>

            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <i className="fas fa-filter h-5 w-5" />
              <span className="sr-only">Filters</span>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              {filterOptions.map(({ id, label, options }) => (
                <Disclosure
                  key={id}
                  as="div"
                  className="border-b border-gray-200 py-6"
                >
                  <h3 className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium text-gray-900">{label}</span>
                      <span className="ml-6 flex items-center">
                        <i className="fas fa-plus group-data-[open]:hidden" />
                        <i className="fas fa-minus [.group:not([data-open])_&]:hidden" />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {options.map((option, index) => (
                        <div key={option} className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${id}-${index}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            <div className="lg:col-span-3">
              <Product />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
