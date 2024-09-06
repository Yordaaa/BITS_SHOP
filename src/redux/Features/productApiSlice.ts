import { apiSlice } from './apiSlice';
import { paramsProps, ProductCardProps, productResTypeProps } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postProduct: builder.mutation({
            query: ({ images, formData }) => {
                const bodyFormData = new FormData();

                images.forEach((image: File) => {
                    bodyFormData.append('file', image);
                });

                bodyFormData.append('formData', JSON.stringify(formData));

                return {
                    url: '/product/create-product',
                    method: 'POST',
                    body: bodyFormData
                };
            }
        }),
        getAllProducts: builder.query<ProductCardProps, paramsProps>({
            query: (params) => {
                console.log(params);
                return {
                    url: '/product/get-all-products',
                    params: {
                        keyword: params.keyword,
                        page: params.page
                    }
                };
            }
        }),
        getProduct: builder.query<productResTypeProps, string | undefined>({
            query: (id) => {

                console.log(id);
                return {
                    url: `/product/get-product/${id}`
                };
            }
        })
    })
});

export const { usePostProductMutation, useGetAllProductsQuery, useGetProductQuery } = productApiSlice;
