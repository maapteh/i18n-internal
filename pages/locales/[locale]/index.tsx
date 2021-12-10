import Head from 'next/head'
import { useRouter } from 'next/router'
import { Page, Text, Button, Link } from '@vercel/edge-functions-ui'

export default function Index(props) {
  
  const router = useRouter();
  const { pathname } = router;

  if (router.isFallback) {
    return (
      <Page>
        <Text variant="h1" className="mb-6">
          Loading...
        </Text>
      </Page>
    )
  };
  
  const handleClickBad = () => {
    router.push({
      pathname: `${pathname}/test`,
      query: {
        q: 'test'
      }
    });
  };
  
  const handleClickGood = () => {
    router.push({
      pathname: `${window.location.href}/test`,
      query: {
        q: 'test'
      }
    });
  };

  return (
    <Page>
      <Head>
        <title>{props.name}</title>
        <meta itemProp="description" content={props.description} />
      </Head>
      <Text variant="h1" className="mb-6">
        Test scenario with <span className="italic">useRouter</span>
      </Text>

      <Text variant="body" className="mb-6">
        The pathname in 'useRouter' is: "{pathname}". Although i do think its the correct pathname server-side. 
        Does that mean for client-side we allways need to overwrite pathname into window.location.href? To not expose our "internal" setup for "locales"?
      </Text>

      <div className="mb-4">

        <Button onClick={handleClickBad}  variant="secondary" className="mr-4">Bad</Button>

        <Button onClick={handleClickGood} variant="primary">Good</Button>
      </div>

      <div className="mb-4">

        <Link href="/test?q=test" className="italic">Nothing wrong with a link</Link>

      </div>
      
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

export async function getStaticProps({ params: { locale } }) {
  return {
    props: {
      name: 'testing scenario',
      description: 'bug or feature'
    },
    revalidate: 3600, // set revalidate interval of 1h
  }
}
