import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { ResponseType, UserApiType } from '@/common/global'

type Result<FetchResponseType> = {
  data: FetchResponseType
  error?: any
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_RESTURL,
  // credentials: 'include',
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as AppState).auth?.accessToken
  //
  //   if (token) {
  //     headers.set(ACCESS_TOKEN_KEY, `Bearer ${token}`)
  //   }
  //
  //   return headers
  // },
})

const baseQueryWithError: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, _api, extraOptions) => {
  let result = (await baseQuery(args, _api, extraOptions)) as Result<
    ResponseType<any>
  >

  console.log(result)

  // if (result.data?.error?.msg) {
  //   const { msg, code } = result.data.error

  // if (code !== ERR_CODE.isForbidden) window.alert(msg)

  // switch (code) {
  //   case ERR_CODE.isForbidden: {
  //     const { auth } = _api.getState() as AppState
  //     if (auth.accessToken) _api.dispatch(logOut.initiate())
  //     break
  //   }
  // }
  // }

  return result
}

export const api = createApi({
  baseQuery: baseQueryWithError,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    // initial endpoints
    getUser: builder.query<
      ResponseType<UserApiType>,
      { username: string; password: string }
    >({
      query: (body) => ({
        url: '/user/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useLazyGetUserQuery } = api

export const { getUser } = api.endpoints
