// Global types shared between client and server

export type ResponseType<DataType> = {
  data?: { [Property in keyof DataType]: DataType[Property] }
  error?: string
}

type SessionApiType = {
  short_title: string
  display_title: string
  status: string
  start_date: string
  end_date: string
}[]
