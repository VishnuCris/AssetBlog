import '@/styles/globals.css'
import MainLayout from '../components/Layout/MainLayout'
import BlogLayout from '../components/Layout/BlogLayout'
import {useRouter} from 'next/router'

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
    {(router.asPath).startsWith('/blog') ? 
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>

      :

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    }
    </>
  )
}
