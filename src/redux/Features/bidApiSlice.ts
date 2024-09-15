import { apiSlice } from './apiSlice';
import { bidProps } from './types';

const bidSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        bidRequest: builder.mutation({
            query: (data) => {
                return {
                    url: '/bid/bid-request',
                    method: 'POST',
                    body: data
                };
            },
            invalidatesTags: ['bid']
        }),
        sellerGetBidRequest: builder.query<bidProps[], string | undefined>({
            query: (id) => {
                return {
                    url: `/bid/get-bid-request/${id}`,
                    method: 'GET'
                };
            },
            providesTags: ['bid']
        }),
        bidHistory: builder.query<bidProps[], void>({
            query: () => {
                return {
                    url: `/bid/get-bid-history`,
                    method: 'GET'
                };
            },
            providesTags: ['bid']
        }),
        bidReject: builder.mutation({
            query: (bidId) => {
                return {
                    url: `/bid/reject-bid/${bidId}`,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['bid']
        }),
        bidAccept: builder.mutation({
            query: (bidId) => {
                return {
                    url: `/bid/accept-bid/${bidId}`,
                    method: 'PUT'
                };
            },
            invalidatesTags: ['bid']
        })
    })
});

export const { useBidRequestMutation, useSellerGetBidRequestQuery, useBidHistoryQuery, useBidRejectMutation, useBidAcceptMutation } = bidSlice;
