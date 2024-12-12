import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Updated API headers
const cryptoNewsHeaders = {
  'x-rapidapi-key': 'ba71834900mshf6835ac64cc6facp16d66cjsn803e016e7f3b',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'X-BingApis-SDK': 'true',
};

// Function to create the request with the headers
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com', // Update base URL
  }),
  endpoints: (builder) => ({
    // Get trending topics from the new API
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(
        `/news/trendingtopics?textFormat=Raw&safeSearch=Off&count=${count}` // Update API endpoint
      ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
