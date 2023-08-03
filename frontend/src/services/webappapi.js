// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const webappapi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({


    loginUser: builder.mutation({
      // ------------------------------------
      query: (userdata) => {
        return {
          url:'api/user/login/',
          method:'POST',
          body:userdata,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
      // ------------------------------------
  }),

    registerUser: builder.mutation({
      // ------------------------------------
      query: (userdata) => {
        return {
          url:'api/user/register/',
          method:'POST',
          body:userdata,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
      // ------------------------------------
  }),
   


    getAllEvents: builder.query({
      query: () => ({
      url:'events/',
      method:'GET'
    })
  }),



  EventLike: builder.mutation({
    // ------------------------------------
    query: ({ userid, eventid, access_token }) => {
      return {
        url:`like-dislike/${userid}/${eventid}/`,
        method:'POST',
        headers : {
          'authorization' : `Bearer ${access_token}`
      }
      }
    }
    // ------------------------------------
}),



uploaduserevent: builder.mutation({
  // ------------------------------------
  query: ({actualData, access_token}) => {
    return {
      url:'uploadevent/',
      method:'PATCH',
      body:actualData,
      headers : {
        'authorization' : `Bearer ${access_token}`
    }
    }
  }
  // ------------------------------------
}),









// ------------------------------------------
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useLoginUserMutation, useRegisterUserMutation, useGetAllEventsQuery, useEventLikeMutation, useUploadusereventMutation } = webappapi