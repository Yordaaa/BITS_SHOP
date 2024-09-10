function ProductSkeleton() {
    return (
        <div className="group relative bg-white border rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="relative">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-8"></div>
                </div>
            </div>
        </div>
    );
}

export default ProductSkeleton;
