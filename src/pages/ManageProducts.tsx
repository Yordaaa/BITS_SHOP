import { ErrorResponse, Link, useNavigate } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useDeleteProductMutation, useGetUserProductQuery } from '../redux/Features/productApiSlice';
import { toast } from 'react-toastify';
import { RegistrationResponseProps } from '../redux/Features/types';
import { Modal } from 'flowbite-react';
import { useState } from 'react';

const ManageProducts = () => {
    const navigate = useNavigate();
    const { data: products, isLoading } = useGetUserProductQuery();
    const [deleteProduct] = useDeleteProductMutation();
    const [openProductModal, setOpenProductModal] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [modalPlacement, setModalPlacement] = useState('center');
    const [isDeleting, setIsDeleting] = useState(false); // New loading state for deletion

    const handleDeleteProduct = async () => {
        try {
            if (deleteId) {
                setIsDeleting(true); // Set loading state to true
                const res = await deleteProduct({ _id: deleteId });
                if ('data' in res) {
                    const { data } = res as { data: RegistrationResponseProps };
                    toast.success(data.message);
                } else {
                    const { error } = res as { error: ErrorResponse };
                    toast.error(error.data.message);
                }
            }
        } catch (error) {
            toast.error('Unexpected error occurred');
        } finally {
            setDeleteId(null);
            setOpenProductModal(false);
            setIsDeleting(false); // Reset loading state
        }
    };

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="col-span-1 h-full border-r-2 ">
                <SideNav />
            </div>
            <div className="py-8 px-4 mx-auto w-full max-w-4xl col-span-4 ">
                <h1 className="text-2xl font-bold mb-6">Manage Products</h1>
                <div className="bg-white shadow-lg rounded-lg overflow-x-auto">
                    <table className="w-full table-auto ">
                        <thead className={`${products && products.length > 0 ? '' : 'hidden'}`}>
                            <tr className="bg-gray-200 text-gray-600 font-bold">
                                <th className="py-3 rounded-tl-lg">Id</th>
                                <th className="py-3 ">Name</th>
                                <th className="py-3">Status</th>
                                <th className="py-3 rounded-tr-lg">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td colSpan={4} className="py-4 text-center">
                                        <div className="shimmer h-8 rounded-lg w-3/4 mx-auto">Loading...</div>
                                    </td>
                                </tr>
                            ) : products && products.length === 0 ? (
                                <tr>
                                    <td colSpan={4}>
                                        <div className="max-w-4xl mx-auto text-center pt-32 pb-60 shadow-none">
                                            <h2 className="text-2xl font-bold text-gray-700">You don't have any products</h2>
                                            <p className="mt-4 text-gray-600">Looks like you didn't post any products.</p>
                                            <button onClick={() => navigate('/addproduct')} className="mt-6 bg-primary text-white py-2 px-4 rounded-3xl hover:bg-opacity-80 transition">
                                                Post product
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product._id} className="border-b bg-gray-100 ">
                                        <td className="py-2 px-2 text-center">{product?._id}</td>
                                        <td className="truncate max-w-[100px] whitespace-nowrap overflow-hidden text-ellipsis">{product?.name}</td>
                                        <td className="py-2 px-2 text-center">{product?.status}</td>
                                        <td className="flex justify-center space-x-2 py-2">
                                            <Link to={`/update-product/${product._id}`} className="text-[#E3A57F] text-xl flex items-center">
                                                <i className="fas fa-edit mr-2"></i>
                                            </Link>
                                            <button
                                                className="text-red-600 text-xl flex items-center"
                                                onClick={() => {
                                                    setDeleteId(product._id);
                                                    setOpenProductModal(true);
                                                }}
                                            >
                                                <i className="fas fa-trash-alt mr-2"></i>
                                            </button>
                                            <Link to={`/bids/${product._id}`} className="bg-primary text-white font-medium py-1 px-3 rounded-3xl flex items-center">
                                                <i className="fas fa-gavel mr-2"></i>
                                                Bids
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {openProductModal && (
                <>
                    <div className="fixed inset-0 bg-black opacity-50" />
                    <Modal show={openProductModal} position={modalPlacement} onClose={() => setOpenProductModal(false)}>
                        <Modal.Body>
                            <div className="p-10 rounded mx-auto flex ">
                                <span className="fas fa-question-circle text-lg pb-1 pr-1"></span>
                                <div>
                                    <p>Are you sure you want to permanently remove this product?</p>
                                    <div className="pt-3">
                                        <button className="bg-red-600 text-white p-1 px-2 rounded mr-2" onClick={handleDeleteProduct}>
                                            {isDeleting ? 'Deleting...' : 'Delete'}
                                        </button>
                                        <button
                                            onClick={() => {
                                                setDeleteId(null);
                                                setOpenProductModal(false);
                                            }}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </section>
    );
};

export default ManageProducts;
