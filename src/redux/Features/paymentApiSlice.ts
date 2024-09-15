import { apiSlice } from './apiSlice';

const paymentApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        payment: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/payment/pay',
                    method: 'POST',
                    body: data
                };
            }
        })
    })
});

export const { usePaymentMutation } = paymentApiSlice;
