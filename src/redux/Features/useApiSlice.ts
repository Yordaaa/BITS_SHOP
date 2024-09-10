import { apiSlice } from './apiSlice';
import { updateProfileProps, UserProps, wishlistResType } from './types';

const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addToWishlist: builder.mutation({
            query: (productId) => {
                return {
                    url: '/user/add-to-wishlist',
                    method: 'POST',
                    body: productId
                };
            },
            invalidatesTags: ['userInfo']
        }),
        removeFromWishlist: builder.mutation({
            query: (productId) => {
                return {
                    url: '/user/remove-from-wishlist',
                    method: 'DELETE',
                    body: productId
                };
            },
            invalidatesTags: ['userInfo']
        }),
        getWishlist: builder.query<wishlistResType, void>({
            query: () => ({
                url: '/user/get-user-wishlist',
                method: 'GET'
            }),
            providesTags: ['userInfo']
        }),
        updateProfile: builder.mutation<UserProps, updateProfileProps>({
            query: (data) => {
                return {
                    url: '/user/update-user-profile',
                    method: 'PUT',
                    body: data
                };
            }
        }),
        updateProfileImg: builder.mutation({
            query: (formData) => {
                return {
                    url: '/user/update-user-profile-picture',
                    method: 'PUT',
                    body: formData
                };
            }
        })
    })
});

export const { useAddToWishlistMutation, useRemoveFromWishlistMutation, useGetWishlistQuery, useUpdateProfileMutation, useUpdateProfileImgMutation } = userSlice;
