import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials : "include" }),
  
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) =>({
        url : '/register',
        method : "post",
        body,
        credentials : "include"
      }),
    }),
    login : builder.mutation({
        query : (body)=>({
            url : "/login",
            method : "post",
            body,
            credentials : "include"
        })
    }),
    homeUser : builder.query({
      query : ()=> '/'
    })
  }),

})


export const { useRegisterMutation, useLoginMutation, useHomeUserQuery } = userApi