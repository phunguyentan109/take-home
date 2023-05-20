import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { ResponseType } from '@/common/global'

type Result<FetchResponseType> = {
  data: FetchResponseType
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_RESTURL,
})

const baseQueryWithError: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, _api, extraOptions) => {
  return (await baseQuery(args, _api, extraOptions)) as Result<
    ResponseType<any>
  >
}

export const api = createApi({
  baseQuery: baseQueryWithError,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: () => ({}),
})
