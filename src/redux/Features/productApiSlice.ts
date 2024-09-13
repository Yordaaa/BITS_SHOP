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
            },
            invalidatesTags: ['product']
        }),
        updateProduct: builder.mutation({
            query: ({ bodyFormData }) => {
                return {
                    url: '/product/update-product',
                    method: 'PUT',
                    body: bodyFormData
                };
            },
            invalidatesTags: ['product']
        }),
        deleteImg: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: `/product/delete-product-img`,
                    method: 'DELETE',
                    body: data
                };
            },
            invalidatesTags: ['product']
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
            providesTags: ['product']
        }),
        getProduct: builder.query<productResTypeProps, string | undefined>({
            query: (id) => {
                return {
                    url: `/product/get-product/${id}`
                };
            },
            providesTags: ['product']
        }),
        getUserProduct: builder.query<productResTypeProps[], void>({
            query: () => {
                return {
                    url: '/product/get-user-products',
                    method: 'GET'
                };
            },
            providesTags: ['product']
        })
    })
});

export const { usePostProductMutation, useGetAllProductsQuery, useGetProductQuery, useGetUserProductQuery, useUpdateProductMutation, useDeleteImgMutation } = productApiSlice;
