import { api } from '@/common/redux/api'
import { ProgramApiType, ResponseType } from '@/common/global'
import * as querystring from 'querystring'

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProgram: builder.query<
      ResponseType<ProgramApiType[]>,
      { [key: string]: string }
    >({
      query: (param) => `/sessions?${querystring.stringify(param)}`,
    }),
  }),
  overrideExisting: true,
})

export const { useLazyGetProgramQuery } = homeApi
