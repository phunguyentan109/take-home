import { api } from '@/common/redux/api'
import { SessionApiType, ResponseType } from '@/common/global'
import * as querystring from 'querystring'

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSession: builder.query<
      ResponseType<SessionApiType[]>,
      { [key: string]: string }
    >({
      query: (param) => `/sessions?${querystring.stringify(param)}`,
    }),
  }),
  overrideExisting: true,
})

export const { useLazyGetSessionQuery } = homeApi
