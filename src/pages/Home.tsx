import { useState } from 'react';
import Product from '../components/Product';
import { Pagination } from 'flowbite-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paramsProps } from '../redux/Features/types';
import { useGetAllProductsQuery } from '../redux/Features/productApiSlice';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        searchParams.set('page', page.toString());
        navigate('/market?' + searchParams);
    };

    const page = Number(searchParams.get('page')) || 1;
    const keyword = searchParams.get('keyword') || '';
    const params: paramsProps = { keyword, page };

    const { data: products, isLoading } = useGetAllProductsQuery(params);

    console.log(products);
    console.log(products?.products);

    return (
        <>
            {isLoading ? (
                <p>Loading....</p>
            ) : (
                <div className="max-w-screen-2xl mx-auto">
                    <div
                        className="lg:h-fit pb-20 bg-center max-w-screen-2xl mx-auto max-h-fit"
                        style={{
                            backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-electronic-technology-flat-simple-poster-banner-image_165770.jpg")',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="pt-20 pb-5">
                            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl pb-3 text-gray-700 text-center use ">WELCOME TO BITS SHOP</div>
                            <div className="text-2xl md:text-4xl lg:text-5xl  text-gray-700 text-center use pb-5">Find Your Needs Here</div>
                            <div className="mx-10">
                                <div className="relative w-full max-w-screen-md mx-auto">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <i className="fas fa-search"></i>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50  "
                                        placeholder="Enter keyword"
                                    />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-primary hover:opacity-90 font-medium rounded-3xl text-sm px-4 py-1 ">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" py-10">
                        <h1 className="text-3xl font-bold text-gray-800 max-w-screen-xl mx-auto">Latest Posts</h1>
                        <Product products={products?.products} />
                        <div className="flex justify-center">
                            <Pagination currentPage={currentPage} totalPages={Math.ceil(products?.filteredProductCount! / products?.resPerPage!)} onPageChange={onPageChange} />
                        </div>
                    </div>
                    <div className="bg-white text-center">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                            <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl">Key Features</h2>
                            <hr className="w-8 h-1 mx-auto my-5 bg-gray-200 border-0 rounded" />
                            <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900 md:text-4xl pb-6">
                                Tailored for <span className="text-primary font-bold">Students</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                                <div>
                                    <i className="fas fa-exchange-alt text-5xl"></i>
                                    <h3 className="mb-2 text-xl font-bold">Peer-to-Peer Marketplace</h3>
                                    <p className="text-gray-600">
                                        Our platform facilitates seamless transactions between students, fostering a community-driven marketplace where you can buy and sell items with ease.
                                    </p>
                                </div>
                                <div>
                                    <i className="fas fa-hand-holding text-5xl"></i>
                                    <h3 className="mb-2 text-xl font-bold">Lending Made Easy</h3>
                                    <p className="text-gray-600">
                                        Borrow and lend items effortlessly while ensuring a secure and trustworthy environment, with features that promote responsible lending practices.
                                    </p>
                                </div>
                                <div>
                                    <i className="fas fa-laptop text-5xl"></i>
                                    <h3 className="mb-2 text-xl font-bold">Affordable Rentals</h3>
                                    <p className="text-gray-600">
                                        Access a variety of products for rent at competitive prices, allowing you to enjoy what you need without the commitment of a purchase.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
