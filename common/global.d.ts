// Global types shared between client and server

export type ResponseType<DataType> = {
  data: { [Property in keyof DataType]: DataType[Property] }
  error: {
    msg?: string
    code?: number
  }
}

export type UserApiType = {
  id?: string
  username?: string
  password?: string
  accessToken?: string
  credential: { [key: string]: boolean }
}
