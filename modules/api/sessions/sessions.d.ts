export type SessionFilterType = {
  short_title?: string
  status?: string
}

type SessionProgramType = {
  id: string
  short_title: string
  thumbnail_img_url: string
  display_title: string
}

export type SessionType = {
  status: string
  start_date: string
  end_date: string
  program: SessionProgramType[]
}

export type TransformSessionType = {
  id: string
  status: string
  start_date: string
  end_date: string
  short_title: string
  thumbnail_img_url: string
  display_title: string
}
