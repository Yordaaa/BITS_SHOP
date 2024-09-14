function ProductDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto py-10 mb-0 md:mb-10 animate-pulse my-10 pb-28">
            <div className="flex flex-col justify-between md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <div className="w-full h-72 bg-gray-200 animate-pulse rounded-md"></div>
                </div>
                <div className="flex-1 md:pl-6 w-full px-5">
                    <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded-md w-1/4 mb-6"></div>
                    <div className="h-32 bg-gray-200 rounded-md w-full mb-6"></div>
                    <div className="flex items-center gap-4">
                        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
                        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailSkeleton;
