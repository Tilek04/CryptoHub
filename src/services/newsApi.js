import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
  "X-RapidAPI-Key": "93d6d18303msh473a096bc9bf821p16fc5cjsned04d1da72bb",
  "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ count }) => createRequest(`/v1/coindesk?limit=${count}`),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi; // Исправленный хук
