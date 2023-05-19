import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../storage'
import { Provider } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Head from 'next/head'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Welcome to my site" />
        <meta name="image" content="https://i.ibb.co/DKXXQN3/screen-home.png" />
        <meta name="author" content="@dvlp.code" />

        <title>I Love Football</title>
      </Head>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SkeletonTheme baseColor={'#202024'} highlightColor={'#121214'}>
            <ToastContainer />
            <Component {...pageProps} />
          </SkeletonTheme>
        </PersistGate>
      </Provider>
    </>
  )
}
