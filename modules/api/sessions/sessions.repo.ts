import { fetchApi } from '@/api/helpers'

export const getSessions = async () => {
  return fetchApi('GET', `${process.env.DATABASE_URL}/sessions`)
}
