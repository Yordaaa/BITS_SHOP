import { apiSlice } from './apiSlice';
import { transactionsProps } from './types';

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
        }),
        transactions: builder.query<transactionsProps[], string | undefined>({
            query: (sellerId) => {
                console.log(sellerId);
                return {
                    url: '/payment/get-transactios',
                    method: 'GET',
                    params: {
                        sellerId
                    }
                };
            }
        })
    })
});

export const { usePaymentMutation, useTransactionsQuery } = paymentApiSlice;
