import { api } from '@/common/redux/api'
import { SessionApiType, ResponseType } from '@/common/global'
import qs from 'query-string'

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSession: builder.query<
      ResponseType<SessionApiType[]>,
      { [key: string]: string }
    >({
      query: (param) =>
        `/sessions?${qs.stringify(param, {
          skipEmptyString: true,
          skipNull: true,
        })}`,
    }),
  }),
  overrideExisting: true,
})

export const { useLazyGetSessionQuery } = homeApi
