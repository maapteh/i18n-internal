import Head from 'next/head'
import { useRouter } from 'next/router'
import { Layout, Page, Text, Link } from '@vercel/edge-functions-ui'

export default function Index({ locale, q }) {
  
  const router = useRouter();
  const { query } = router;

  if (router.isFallback) {
    return (
      <Page>
        <Text variant="h1" className="mb-6">
          Loading...
        </Text>
      </Page>
    )
  }
  
  return (
    <Page>
      <Head>
        <title>Test</title>
      </Head>
      <Text variant="h1" className="mb-6">
        Result 
      </Text>
      <Text variant="body" className="mb-6">
        Render for locale "{locale}" and our query "{query.q}"
      </Text>
      
    </Page>
  )
}

export async function getStaticPaths() {

  const paths = [
    { params: { locale: 'nl-NL' } }
  ];

  return {
    paths: paths,
    fallback: true, // fallback true allows sites to be generated using ISR
  }
}

export async function getStaticProps({ params: { locale }}) {
  return {
    props: {
      locale,
    },
    revalidate: 3600, // set revalidate interval of 1h
  }
}
