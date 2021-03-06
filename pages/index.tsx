import { NextPage } from 'next';
import Head from 'next/head';
import { Banner } from '../components/2-molecules/Banner';
import { Movie } from '../typings.d';
import requests from '../api/baseUrl';
import { Header } from '../components/2-molecules/Header';

interface Props {
  netflixOriginalsResult: Movie[];
}
const Home: NextPage = ({ netflixOriginalsResult }: Props) => {
  return (
    <div>
      <Head>
        <title>Netflix-clone 01</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginalsResult} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
export const getStaticProps = async () => {
  const netflixOriginals = await fetch(requests.fetchNetflixOriginals);
  const netflixOriginalsResult = await netflixOriginals.json();
  return {
    props: {
      netflixOriginalsResult: netflixOriginalsResult.results,
    }
  };
};
