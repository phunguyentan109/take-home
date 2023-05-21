import type { NextApiRequest, NextApiResponse } from 'next'
import { getSessionsController } from '@/modules/api/sessions/sessions.controller'
import { ResponseType, ProgramApiType } from '@/common/global'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType<ProgramApiType>>
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(await getSessionsController(req))
      break

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
