import '@/common/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App({ Component, ...rest }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(rest)

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Component {...props.pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App
