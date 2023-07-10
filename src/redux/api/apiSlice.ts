import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({
    //get products
    getProducts: builder.query({
      query: () => '/products',
    }),
    // get single products
    singleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
    //posr comment
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductsQuery,
  usePostCommentMutation,
} = api;
