import '@/styles/globals.css'
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
      <Component {...pageProps} />
    }
    </>
  )
}
