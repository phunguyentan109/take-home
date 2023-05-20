import { api } from '@/common/redux/api'
import { SessionApiType, ResponseType } from '@/common/global'

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSession: builder.query<ResponseType<SessionApiType>, void>({
      query: () => '/sessions',
    }),
  }),
  overrideExisting: true,
})

export const { useGetSessionQuery } = homeApi
