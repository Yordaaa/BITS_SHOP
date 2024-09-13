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
            }
        }),
        sellerGetBidRequest: builder.query<bidProps[], string | undefined>({
            query: (id) => {
                return {
                    url: `/bid/get-bid-request/${id}`,
                    method: 'GET'
                };
            }
        }),
        bidHistory: builder.query<bidProps[], void>({
            query: () => {
                return {
                    url: `/bid/get-bid-history`,
                    method: 'GET'
                };
            }
        })
    })
});

export const { useBidRequestMutation, useSellerGetBidRequestQuery, useBidHistoryQuery } = bidSlice;
