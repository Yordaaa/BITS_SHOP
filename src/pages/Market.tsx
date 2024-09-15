import { FormEvent, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import Product from '../components/Product';
import { useGetAllProductsQuery } from '../redux/Features/productApiSlice';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paramsProps } from '../redux/Features/types';
import { Pagination } from 'flowbite-react';
import { useGetAllCategoriesQuery } from '../redux/Features/categoryApiSlice';
import { getPriceValue } from '../helpers/getPriceValue';
import ProductSkeleton from '../components/ProductSkeleton';

const sortOptions = [
    { name: 'Date: Old to New', value: 'createdAt', current: false },
    { name: 'Date: New to Old', value: '-createdAt', current: false },
    { name: 'Price: Low to High', value: 'price', current: false },
    { name: 'Price: High to Low', value: '-price', current: false }
];

export default function ElectronicsFilter() {
    const [isMobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    let [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.has('category') ? searchParams.get('category') : null);
    const [min, setMin] = useState<string | null>(searchParams.has('min') ? searchParams.get('min') : null);
    const [max, setMax] = useState<string | null>(searchParams.has('max') ? searchParams.get('max') : null);
    const [sortBy, setSortBy] = useState<string | null>(searchParams.get('sortBy') ? searchParams.get('sortBy') : 'createdAt');
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();

    const { data: categories } = useGetAllCategoriesQuery();

    const filterOptions = [
        {
            id: 'categories',
            label: 'Categories',
            options: categories?.map((category) => category.name)
        }
    ];

    const priceOnchangeHandler = (e: FormEvent) => {
        e.preventDefault();
        searchParams = getPriceValue({ searchParams, key: 'min', value: min });
        searchParams = getPriceValue({ searchParams, key: 'max', value: max });
        navigate('/market?' + searchParams.toString());
    };

    const sortOnChangeHandler = (value: string) => {
        setSortBy(value);
        searchParams.set('sortBy', value);
        setSearchParams(searchParams);
        navigate('/market?' + searchParams.toString());
    };

    const handleCategoryClick = (category: string) => {
        if (category === selectedCategory) {
            setSelectedCategory(null);
            searchParams.delete('category');
        } else {
            setSelectedCategory(category);
            searchParams.set('category', category);
        }

        setSearchParams(searchParams);
        navigate('/market?' + searchParams.toString());
    };
    const onPageChange = (page: number) => {
        setCurrentPage(page);
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
        navigate('/market?' + searchParams);
    };

    const page = Number(searchParams.get('page')) || 1;
    const keyword = searchParams.get('keyword') || '';

    const params: paramsProps = { keyword, page };
    const category = selectedCategory;

    category !== null && (params.category = category);
    min !== null && min !== '' && (params.min = min);
    max !== null && max !== '' && (params.max = max);
    params.sortBy = sortBy;
    const { data: products, isLoading } = useGetAllProductsQuery(params);

    return (
        <>
            <div className="bg-white">
                {/* Mobile filter dialog */}
                <Dialog open={isMobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)} className="relative z-40 lg:hidden">
                    <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
                    <div className="fixed inset-0 z-40 flex">
                        <DialogPanel className="relative ml-auto h-full w-full max-w-xs flex flex-col bg-white py-4 pb-12 shadow-xl">
                            <div className="flex justify-between pr-1 pl-4 pt-20 items-center">
                                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                <button onClick={() => setMobileFiltersOpen(false)} className="h-10 w-10 rounded-md  text-gray-400 text-3xl">
                                    <span className="sr-only">Close menu</span>&times;
                                </button>
                            </div>

                            {/* Filters for mobile view */}
                            <div className="mt-4 border-t border-gray-200">
                                {filterOptions.map(({ id, label, options }) => (
                                    <Disclosure key={id} as="div" className="border-t border-gray-200 px-4 py-6">
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
                                                {options?.map((option, index) => (
                                                    <div key={index} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            name={option}
                                                            value={option}
                                                            checked={selectedCategory === option}
                                                            onChange={() => handleCategoryClick(option)}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor={`filter-mobile-${id}-${index}`} className="ml-3 flex-1 text-gray-500">
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                            </div>
                            <div className="mt-4 border-t border-gray-200">
                                <p className="font-medium text-gray-900 ml-4 mt-8">
                                    <span>Price Range</span>
                                    <form className="grid grid-cols-2 gap-4 mt-4" onSubmit={priceOnchangeHandler}>
                                        <input
                                            type="text"
                                            value={min === null ? '' : min}
                                            onChange={(e) => setMin(e.target.value)}
                                            name="min"
                                            id="min"
                                            placeholder="min..."
                                            className="w-20 border  border-grey rounded"
                                        />

                                        <input
                                            type="text"
                                            value={max === null ? '' : max}
                                            onChange={(e) => setMax(e.target.value)}
                                            name="max"
                                            id="min"
                                            placeholder="max..."
                                            className="w-20 border border-grey rounded"
                                        />
                                    </form>
                                </p>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between border-b border-gray-200 pb-6 pt-10">
                        <h1 className="text-4xl font-bold text-gray-900">Products</h1>

                        <div className="flex items-center">
                            <div className="relative text-left">
                                <div className="group inline-flex text-md font-medium text-gray-700 hover:text-gray-900">
                                    <div className=" text-sm origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
                                        <select value={sortBy ?? ''} onChange={(e) => sortOnChangeHandler(e.target.value)}>
                                            {sortOptions.map(({ name, value }) => (
                                                <option key={value} value={value}>
                                                    {name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <button onClick={() => setMobileFiltersOpen(true)} className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                                    <i className="fas fa-filter h-5 w-5" />
                                    <span className="sr-only">Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */}
                            <div className="hidden lg:block">
                                {filterOptions.map(({ id, label, options }) => (
                                    <Disclosure key={id} as="div" className="border-b border-gray-200 py-6">
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
                                                {options?.map((option, i) => (
                                                    <div key={i} className="flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            name={option}
                                                            value={option}
                                                            checked={selectedCategory === option}
                                                            onChange={() => handleCategoryClick(option)}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor={`filter-${id}-${i}`} className="ml-3 text-sm text-gray-600">
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </DisclosurePanel>
                                    </Disclosure>
                                ))}
                                <div className="mt-4 min-h-60">
                                    <p className="font-medium mt-8">
                                        <span className="text-gray-900">Price Range</span>
                                        <form className="grid grid-cols-3 gap-4 mt-4" onSubmit={priceOnchangeHandler}>
                                            <input
                                                type="text"
                                                value={min === null ? '' : min}
                                                onChange={(e) => setMin(e.target.value)}
                                                name="min"
                                                id="min"
                                                placeholder="min ($)"
                                                className="w-20 border  border-grey rounded"
                                            />

                                            <input
                                                type="text"
                                                name="max"
                                                value={max === null ? '' : max}
                                                onChange={(e) => setMax(e.target.value)}
                                                id="min"
                                                placeholder="max($)"
                                                className="w-20 border border-grey rounded"
                                            />
                                        </form>
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-3">
                                {isLoading ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
                                        {[...Array(8)].map((_, index) => (
                                            <ProductSkeleton key={index} />
                                        ))}
                                    </div>
                                ) : (
                                    <>
                                        <Product products={products?.products} />
                                        {products?.resPerPage! > 8 && (
                                            <div className="flex justify-center">
                                                <Pagination currentPage={currentPage} totalPages={Math.ceil(products?.filteredProductCount! / products?.resPerPage!)} onPageChange={onPageChange} />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
