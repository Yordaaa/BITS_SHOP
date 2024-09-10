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
                return {
                    url: '/product/get-all-products',
                    params: {
                        keyword: params.keyword,
                        page: params.page,
                        category: params.category,
                        sortBy: params.sortBy,
                        'price[gte]': params.min,
                        'price[lte]': params.max
                    }
                };
            },
            providesTags: ['userInfo']
        }),
        getProduct: builder.query<productResTypeProps, string | undefined>({
            query: (id) => {
                return {
                    url: `/product/get-product/${id}`
                };
            },
            providesTags: ['userInfo']
        })
    })
});

export const { usePostProductMutation, useGetAllProductsQuery, useGetProductQuery } = productApiSlice;
