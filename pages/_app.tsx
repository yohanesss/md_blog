import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "../components/GlobalStyles";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yohanes Setiawan</title>
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
