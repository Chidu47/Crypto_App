import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const createApiHeaders = {
    'x-rapidapi-host':  process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
}

const baseUrl =process.env.REACT_APP_CRYPTO_API_URL;



const createRequest = (url) => ({ url, headers:createApiHeaders}) 

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl:process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            query : () => createRequest(`/exchanges`),
        }),
        getCryptoDetails: builder.query({
            query : (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query : ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
        }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery,useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;  





// 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
// 'x-rapidapi-key': 'fd6b71adf6msh79a3e6153993f42p101126jsna183e39ae65d'
// const baseUrl = 'https://coinranking1.p.rapidapi.com';