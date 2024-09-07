
import { Link } from 'react-router-dom';
import { productResTypeProps } from '../redux/Features/types';

interface ProductProps {
    products: productResTypeProps[] | undefined;
}

function Product({ products }: ProductProps) {
    console.log();
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
            {products?.map((product) => (
                <div key={product._id} className="group relative bg-white border rounded-lg shadow-md overflow-hidden">
                    <div className="relative">
                        <img src={product.images?.[0].secure_url} alt={product.name} className="w-full h-48 object-contain" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white hover:text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Link to={`/product/${product._id}`}className="w-full py-2">
                                Show Details
                            </Link>
                        </div>
                    </div>
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="mt-4 text-xl font-bold">{product.price}</div>
                            <button className="far fa-heart border rounded-full px-2 py-1 text-xl hover:bg-primary hover:text-white border-gray-500 text-primary mr-2"></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
