import { ErrorResponse, useParams } from 'react-router-dom';
import SideNav from '../components/SideNav';
import { useDeleteImgMutation, useGetProductQuery, useUpdateProductMutation } from '../redux/Features/productApiSlice';
import { ChangeEvent, DragEvent, FormEvent, useEffect, useState } from 'react';
import { useGetAllCategoriesQuery } from '../redux/Features/categoryApiSlice';
import { RegistrationResponseProps } from '../redux/Features/types';
import { toast } from 'react-toastify';

function UpdateProduct() {
    const { id } = useParams<{ id: string }>();

    const [images, setImages] = useState<File[]>([]);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        category: 'Electronics',
        product_id: ''
    });

    const { data: categories } = useGetAllCategoriesQuery();
    const [updateProduct, { isLoading }] = useUpdateProductMutation();
    const [deleteImg] = useDeleteImgMutation();
    const { data: product } = useGetProductQuery(id);

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name || '',
                description: product.description || '',
                price: product.price || 0,
                category: product.category || 'Electronics',
                product_id: product._id
            });
        }
    }, [product]);

    const handleFormDataChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (fileList) {
            const fileArray = Array.from(fileList);
            setImages((prevImages) => [...prevImages, ...fileArray]);
        }
    };

    const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const fileList = event.dataTransfer.files;
        const fileArray = Array.from(fileList);
        setImages((prevImages) => [...prevImages, ...fileArray]);
    };

    const handleRemoveImage = (index: number) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleDeleteImage = async (_id: string, public_id: string) => {
        console.log(_id, public_id);
        try {
            const res = await deleteImg({ _id, public_id });
            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
        } catch (error) {
            toast.error('An unexpected error occurred');
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const bodyFormData = new FormData();

        if (images && images.length > 0) {
            images.forEach((image: File) => {
                bodyFormData.append('file', image);
            });
        }

        bodyFormData.append('formData', JSON.stringify(formData));

        try {
            const res = await updateProduct({
                bodyFormData
            });

            if ('data' in res) {
                const { data } = res as { data: RegistrationResponseProps };
                toast.success(data.message);
            } else {
                const { error } = res as { error: ErrorResponse };
                toast.error(error.data.message);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error('An unexpected error occurred', error.message);
        }
    };

    return (
        <section className="grid grid-cols-5 bg-white max-w-screen-xl mx-auto">
            <div className="col-span-1 h-full border-r-2 ">
                <SideNav />
            </div>
            <div className="py-8 px-4 mx-auto w-full max-w-2xl col-span-4 ">
                <h2 className="mb-4 text-xl font-bold text-gray-900">Add a new product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormDataChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Enter product name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleFormDataChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required
                            >
                                {categories?.map((cate) => (
                                    <option key={cate._id} value={cate.name}>
                                        {cate.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                                Price
                            </label>
                            <input
                                name="price"
                                value={formData.price}
                                onChange={handleFormDataChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Enter price"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
                                Description
                            </label>
                            <textarea
                                name="description"
                                rows={4}
                                value={formData.description}
                                onChange={handleFormDataChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Your description here"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900">
                                Images
                            </label>
                            <div className="gap-8 md:flex  mb-4">
                                {product?.images.map((img) => {
                                    return (
                                        <div className="border border-gray-200 flex   md:p-5 gap-4 ">
                                            <img key={img.public_id} src={img.secure_url} alt={`Image ${img.public_id}`} className="w-24 h-24 object-cover rounded-lg " />
                                            <i onClick={() => handleDeleteImage(product._id, img.public_id)} className="hover:cursor-pointer fas fa-trash text-xl text-red-600 mt-16"></i>
                                        </div>
                                    );
                                })}
                            </div>
                            <label htmlFor="images" className="block mb-2 text-sm font-medium text-gray-900">
                                Upload New Images
                            </label>
                            <div className="flex flex-wrap mt-4">
                                {images.map((image, index) => (
                                    <div key={index} className="flex flex-col items-center justify-center mr-4 mb-4 relative">
                                        <img src={URL.createObjectURL(image)} alt={`Image ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
                                        <button className="absolute top-0 right-0  bg-[#E3A57F] text-white rounded-full hover:bg-gray-600" onClick={() => handleRemoveImage(index)}>
                                            <i className="fas fa-minus h-4 w-6"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col items-center justify-center w-full" onDrop={handleDrop} onDragOver={handleDragOver}>
                                <label className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500">
                                            <span className="font-semibold">Click or drag and drop</span> to upload
                                        </p>
                                        <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={isLoading} className="px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-3xl hover:bg-opacity-80">
                        {isLoading ? 'Updating...' : 'Update product'}
                    </button>
                </form>
            </div>
        </section>
    );
}
export default UpdateProduct;
