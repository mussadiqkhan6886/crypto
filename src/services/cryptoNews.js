import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiKey = "pub_369e6feeeae0456b968d3b2e51ce0407"

const baseUrl = "https://newsdata.io/api/1/latest"

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({newsCategory, count}) => `?apikey=${apiKey}&q=${newsCategory}&size=${count}`
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;