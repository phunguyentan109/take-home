import * as sessionsRepo from './sessions.repo'
import {
  SessionFilterType,
  SessionType,
  TransformProgramType,
} from '@/modules/api/sessions/sessions'
import dayjs from 'dayjs'

export const getSessions = async (filter: SessionFilterType) => {
  let allSessions = await sessionsRepo.getSessions()

  if (filter.status) {
    allSessions = allSessions.filter(
      (ses: SessionType) => ses.status === filter.status?.toUpperCase()
    )
  }

  let programs = allSessions.reduce(
    (rs: TransformProgramType[], n: SessionType) => {
      if (n.program && n.program?.length > 0) {
        let pgrams = n.program.map((prog) => {
          const { status, start_date, end_date } = n
          return {
            status,
            start_date,
            end_date,
            ...prog,
          }
        })

        rs = [...rs, ...pgrams]
      }

      return rs
    },
    []
  )

  if (filter.status || filter.short_title) {
    const filterKey = `${filter.short_title || ''}.${(
      filter.status || ''
    ).toUpperCase()}`

    programs = programs.filter((pro: TransformProgramType) => {
      let programKey = `${pro.short_title}.${pro.status}`

      return programKey.includes(filterKey)
    })
  }

  programs.sort((a: TransformProgramType, b: TransformProgramType) =>
    dayjs(a.start_date).isBefore(b.start_date) ? 1 : -1
  )

  if (programs.length > 50) {
    programs = programs.slice(0, 50)
  }

  return programs
}
