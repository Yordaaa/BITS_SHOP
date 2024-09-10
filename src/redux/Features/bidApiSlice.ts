import { apiSlice } from './apiSlice';

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
        })
    })
});

export const { useBidRequestMutation } = bidSlice;
