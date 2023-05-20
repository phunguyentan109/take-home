import { createSlice } from '@reduxjs/toolkit'
import { getUser } from '@/common/redux/api'
import { UserApiType } from '@/common/global'

const initialState = { username: '' } as UserApiType

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(getUser.matchFulfilled, (state, { payload }) => {
      if (payload.error?.msg) return

      const { data } = payload

      state.username = data?.username || initialState.username
    })
  },
})

export default authSlice
