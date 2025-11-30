import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const thirdPartyApi = createApi({
  reducerPath: 'thirdPartyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000', credentials : "include" }),
  tagTypes : ['party'],
  endpoints: (builder) => ({
    clientUrl : builder.mutation({
        query : (body)=>({
            url : '/oauth/clientConsole',
            method : 'post',
            body
        }),
        invalidatesTags :['party']
    }),
    listClientUrl : builder.query({
      query : ()=>"/oauth/clientList",
      providesTags : ['party']
    }),
  
  }),

})


export const { useClientUrlMutation, useListClientUrlQuery } = thirdPartyApi