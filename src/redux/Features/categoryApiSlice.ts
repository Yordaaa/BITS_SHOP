import { apiSlice } from './apiSlice';
import { categoryResTypeProps } from './types';

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<categoryResTypeProps[], void>({
            query: () => {
                return {
                    url: '/category/get-all-categories',
                    method: 'GET'
                };
            }
        })
    })
});

export const { useGetAllCategoriesQuery } = categoryApiSlice;
