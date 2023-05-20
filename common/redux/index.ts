import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { api } from '@/common/redux/api'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
})

const makeStore = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
      devTools: true,
    })
  }

  const persistConfig = {
    key: 'nextjs',
    whitelist: ['auth'],
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  let store: any = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }).concat(api.middleware),
  })

  store.__persistor = persistStore(store)
  return store
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore)
