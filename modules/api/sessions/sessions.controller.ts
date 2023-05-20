import * as sessionsService from './sessions.service'
import type { NextApiRequest } from 'next'
import { SessionFilterType } from '@/modules/api/sessions/sessions'

export const getSessionsController = async (request: NextApiRequest) => {
  try {
    const { short_title = '', status = '' } = request.query

    let rs = await sessionsService.getSessions({
      short_title,
      status,
    } as SessionFilterType)

    return { data: rs || [] }
  } catch (e) {
    return { error: 'Something wrong' }
  }
}
