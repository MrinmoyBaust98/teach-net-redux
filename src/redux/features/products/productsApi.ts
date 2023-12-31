import { api } from '@/redux/api/apiSlice';

const productsApi = api.injectEndpoints({
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
      invalidatesTags: ['comments'],
    }),
    // get comments
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductsQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = productsApi;
