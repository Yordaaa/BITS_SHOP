import { apiSlice } from './apiSlice';
import { LoginUserInputProps, RegistrationInputProps, RegistrationResponseProps, resTypeProps } from './types';
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<resTypeProps, LoginUserInputProps>({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                };
            }
        }),

        logoutApi: builder.mutation<void, void>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        }),

        registration: builder.mutation<RegistrationResponseProps, RegistrationInputProps>({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        }),
        forgotPassword: builder.mutation({
            query: (data) => {
                return {
                    url: `/auth/forgot-password`,
                    method: 'POST',
                    body: data
                };
            }
        }),
        resetPassword: builder.mutation({
            query: ({ token, userId, data }) => ({
                url: `/auth/reset-password/${token}/${userId}`,
                method: 'PUT',
                body: data
            })
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: `/auth/change-password`,
                method: 'PUT',
                body: data
            })
        })
    })
});

export const { useLoginMutation, useLogoutApiMutation, useRegistrationMutation, useForgotPasswordMutation, useResetPasswordMutation, useChangePasswordMutation } = authApiSlice;
