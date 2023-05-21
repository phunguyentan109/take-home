// Global types shared between client and server

export type ResponseType<DataType> = {
  data?: { [Property in keyof DataType]: DataType[Property] }
  error?: string
}

type SessionApiType = {
  id: string
  short_title: string
  display_title: string
  status: string
  start_date: string
  thumbnail_img_url: string
  end_date: string
}
