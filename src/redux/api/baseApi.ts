import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import {createApi} from "@reduxjs/toolkit/query/react";




 export const baseApi = createApi({
    reducerPath:"baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://next-lavel-a4-backend.vercel.app"}),

    tagTypes: ["Book","Books","BorrowSummary"], 
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: ()=> "/api/books",
            providesTags: ["Book"],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: "/api/books",
                method: "POST",
                body: newBook,
            }),
            invalidatesTags: ["Book"], 
        }),

         deleteBook: builder.mutation({
            query: (id) => ({
                url: `/api/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Book"],
            }),

            getSingleBook: builder.query({
              query: (id) => `/api/books/${id}`,
             }),
             updateBook: builder.mutation({
                query: ({ id, updatedData }) => ({
                    url: `/api/books/${id}`,
                    method: "PATCH",
                    body: updatedData,
                }),
                invalidatesTags: ["Book"],
                }),

                borrowBook: builder.mutation({
                    query: (data) => ({
                        url: "/api/borrow",
                        method: "POST",
                        body: data,
                    }),
                    invalidatesTags: ["BorrowSummary"],
                    }),

                    getBorrowSummary: builder.query({
                    query: () => "/api/borrow",
                    providesTags: ["BorrowSummary"],
                    }),






}),


});


export const {useGetBooksQuery, useAddBookMutation, useDeleteBookMutation,
     useGetSingleBookQuery, useUpdateBookMutation, useBorrowBookMutation, useGetBorrowSummaryQuery } = baseApi;