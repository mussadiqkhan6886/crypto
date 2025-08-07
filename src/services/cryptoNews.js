import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
// 		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
// 		'X-BingApis-SDK': 'true'
// 	}
// }

const NewsUrl = 'https://bing-news-search1.p.rapidapi.com';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7195480f51msh47a3dfccc8ded61p119881jsn987972b8e63a',
		'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
		'X-BingApis-SDK': 'true'
	}
};



const createRequest = (url) => ({url, headers: options})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl: NewsUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news?safeSearch=Off&textFormat=Raw`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi