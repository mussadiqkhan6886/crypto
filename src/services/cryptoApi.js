import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "x-rapidapi-host" : "coinranking1.p.rapidapi.com",
    'x-rapidapi-key' : "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85"
}

const baseURL = "https://coinranking1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`)
        })
    })
})

export const { useGetCryptoQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi