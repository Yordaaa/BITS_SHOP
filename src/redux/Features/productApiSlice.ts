import { apiSlice } from './apiSlice';
import { paramsProps, ProductCardProps } from './types';

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postProduct: builder.mutation({
            query: ({ images, formData }) => {
                var bodyFormData = new FormData();

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
        })
    })
});

export const { usePostProductMutation, useGetAllProductsQuery } = productApiSlice;
