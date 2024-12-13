import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-rapidapi-key': 'ba71834900mshf6835ac64cc6facp16d66cjsn803e016e7f3b',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'X-BingApis-SDK': 'true',
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bing-news-search1.p.rapidapi.com', 
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(
        `/news/trendingtopics?textFormat=Raw&safeSearch=Off&count=${count}`
      ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
